import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("Error: GEMINI_API_KEY is not defined in .env.local");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function listModels() {
  try {
    // There isn't a direct listModels method on the client instance in some versions of the SDK,
    // but usually it's available via a specific manager or we just try a known working model.
    // Actually, looking at the SDK docs (simulated), genAI.getGenerativeModel is the main entry.
    // There isn't always a public listModels method exposed easily in the high-level SDK without looking at the helper.
    // Let's try to just use 'gemini-pro' as a fallback test.
    
    console.log("Testing model: gemini-2.5-flash");
    const model1 = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    try {
        await model1.generateContent("Hello");
        console.log("SUCCESS: gemini-2.5-flash is working.");
    } catch (e) {
        console.error("FAILED: gemini-2.5-flash", e.message);
    }

    console.log("Testing model: gemini-1.5-flash");
    const model2 = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    try {
        await model2.generateContent("Hello");
        console.log("SUCCESS: gemini-1.5-flash is working.");
    } catch (e) {
        console.error("FAILED: gemini-1.5-flash", e.message);
    }
    
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listModels();
