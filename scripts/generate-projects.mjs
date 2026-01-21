import OpenAI from "openai";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const USERNAME = "Abhinav-1502";
const PINNED_API_URL = `https://pinned.berrysauce.dev/get/${USERNAME}`;

if (!OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY is not defined in .env.local");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function getPinnedRepos() {
  console.log("Fetching pinned repositories...");
  const response = await fetch(PINNED_API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch pinned repos: ${response.statusText}`);
  }
  return response.json();
}

async function getReadmeContent(repoName) {
  const readmeUrl = `https://raw.githubusercontent.com/${USERNAME}/${repoName}/HEAD/README.md`;
  console.log(`Fetching README for ${repoName}...`);
  try {
    const response = await fetch(readmeUrl);
    if (!response.ok) return "";
    return await response.text();
  } catch (error) {
    console.error(`Error fetching README for ${repoName}:`, error);
    return "";
  }
}

async function processProject(repo) {
  const readme = await getReadmeContent(repo.name);
  
  if (!readme) {
    console.warn(`No README found for ${repo.name}, using default description.`);
    return {
      ...repo,
      generatedDescription: repo.description || "No description available.",
      techStack: [repo.language].filter(Boolean)
    };
  }

  const prompt = `
    Analyze the following README content for the GitHub project "${repo.name}" from a senior software engineer's perspective.
    
    README Content:
    ${readme.slice(0, 10000)}
    
    Task:
    1. Write a highly technical and concise description of the project (approx 2 sentences). Focus on the architecture, technical implementation details, engineering challenges solved, and core functionality. Use industry-standard terminology.
    2. Identify the specific technical stack, including core languages, significant frameworks, and key libraries used (max 5 items).
    
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
        { role: "system", content: "You are a helpful assistant that summarizes GitHub repositories. You must response with valid JSON." },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" }
    });

    const content = completion.choices[0].message.content;
    const data = JSON.parse(content);
    
    return {
      ...repo,
      generatedDescription: data.generatedDescription,
      techStack: data.techStack
    };
  } catch (error) {
    console.error(`Error generating content with OpenAI for ${repo.name}:`, error.message);
    return {
      ...repo,
      generatedDescription: repo.description || "No description available.",
      techStack: [repo.language].filter(Boolean)
    };
  }
}

async function main() {
  try {
    const repos = await getPinnedRepos();
    console.log(`Found ${repos.length} pinned repositories.`);
    
    const processedProjects = [];
    
    for (const repo of repos) {
      console.log(`Processing ${repo.name}...`);
      const projectData = await processProject(repo);
      processedProjects.push(projectData);
    }
    
    const outputPath = path.join(process.cwd(), "src", "data", "projects.json");
    await fs.writeFile(outputPath, JSON.stringify(processedProjects, null, 2));
    
    console.log(`Successfully generated projects data at ${outputPath}`);
  } catch (error) {
    console.error("Script failed:", error);
    process.exit(1);
  }
}

main();
