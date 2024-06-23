const axios = require("axios");
require("dotenv").config();

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

async function generateTranslation(text, fromLang, toLang) {
  try {
    const response = await axios.post(
      GROQ_API_URL,
      {
        model: "llama2-70b-4096",
        messages: [
          {
            role: "system",
            content: `You are a translator. Translate from ${fromLang} to ${toLang}.`,
          },
          {
            role: "user",
            content: text,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "Error calling Groq API:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

module.exports = { generateTranslation };
