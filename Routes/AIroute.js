const express = require('express');
const route = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

require('dotenv/config');

const genAI = new GoogleGenerativeAI(process.env.AI_TOKEN); // ✅ Store API key in .env

route.post("/generateQuery", async (req, res) => {
    try {
        const { answers } = req.body;

        const prompt = `Based on these details:
            Type: ${answers.type}
            Mood: ${answers.mood}
            Genre: ${answers.genre}
            Pace: ${answers.pace}
            Era: ${answers.era}
            Ending: ${answers.ending}
            Industry: ${answers.industry}
            Minimum Rating: ${answers.rating}

            Generate a TMDB-friendly search query using only relevant keywords.
            Use simple terms like:
            - "classic romance movies Hollywood 8+ rating"
            - "best action films Bollywood fast-paced"
            - "top horror anime web series 2000s with 7+ rating"

            If the user selects "Middle Years" for the era, assume movies/shows from **2000s to 2015**.

            Return ONLY the query without extra words.`;


        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const aiResponse = await model.generateContent(prompt);

        const query = aiResponse.response.text().trim();

        res.json({ query });

    } catch (error) {
        res.status(500).json({ error: "Failed to generate query" });
    }
});

route.post("/language", async (req, res) => {
    const { Aidata } = req.body;
    const prompt = `You are given the name of a Movie, Web Series, or Anime along with a language. 
    Your task is to determine whether this content is available in the given language.  
    If available, provide the platform(s) where it can be watched.  
    Otherwise, just return "No".  
    
    ### **Answer Format:**  
    - If available: **"Yes - [Platform Name(s),]"**  
    - If not available: **"No"**  
    
    ### **Example Answers:**  
     If available → "Yes - Netflix, Hotstar"  
     If not available → "No"  
    
    ### **Content Details:**  
    - **Title:** ${Aidata.name}  
    - **Language:** ${Aidata.language}  
    
    Now, check and provide the correct answer strictly in the given format.`;
    


    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

     const aiResponse = await model.generateContent(prompt);

     const query = aiResponse.response.text().trim();

     res.json({ query });
});


module.exports = route;