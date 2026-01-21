/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from "openai";
import fs from "fs/promises";
import path from "path";

// Function to wait
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      return NextResponse.json({ error: "Server Configuration Error: OPENAI_API_KEY missing" }, { status: 500 });
    }

    const USERNAME = "Abhinav-1502";
    const PINNED_API_URL = `https://pinned.berrysauce.dev/get/${USERNAME}`;
    
    // Initialize OpenAI
    const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
    
    // 1. Fetch Pinned Repos
    const pinnedRes = await fetch(PINNED_API_URL);
    if (!pinnedRes.ok) throw new Error("Failed to fetch pinned repos");
    const repos = await pinnedRes.json();

    const processedProjects = [];

    // 2. Process each repo
    for (const repo of repos) {
      // Fetch README
      let readme = "";
      try {
        const readmeRes = await fetch(`https://raw.githubusercontent.com/${USERNAME}/${repo.name}/HEAD/README.md`);
        if (readmeRes.ok) readme = await readmeRes.text();
      } catch (e) {
        console.error(`Failed to fetch readme for ${repo.name}`);
      }

      let projectData = {
        ...repo,
        generatedDescription: repo.description,
        techStack: [repo.language].filter(Boolean)
      };

      if (readme) {
        const prompt = `
          Analyze the following README content for the GitHub project "${repo.name}".
          
          README Content:
          ${readme.slice(0, 10000)}
          
          Task:
          1. Write a clear, engaging, and concise description of the project (approx 2 sentences). Focus on what it does and the problem it solves.
          2. Identify the core technologies, frameworks, and languages used (max 5 items).
          
          Return the response as a valid JSON object with the following structure:
          {
            "generatedDescription": "string",
            "techStack": ["tech1", "tech2", ...]
          }
        `;

        try {
          const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: "You are a helpful assistant options. You must response with valid JSON." },
              { role: "user", content: prompt }
            ],
            response_format: { type: "json_object" }
          });

          const content = completion.choices[0].message.content;
          if (content) {
            const data = JSON.parse(content);
            projectData = { ...projectData, ...data };
          }
        } catch (err) {
          console.error(`OpenAI Generation failed for ${repo.name}:`, err);
        }
      }

      processedProjects.push(projectData);
    }

    // 3. Write to file
    const outputPath = path.join(process.cwd(), "src", "data", "projects.json");
    await fs.writeFile(outputPath, JSON.stringify(processedProjects, null, 2));

    return NextResponse.json({ success: true, count: processedProjects.length });

  } catch (error: any) {
    console.error("API Generation Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
