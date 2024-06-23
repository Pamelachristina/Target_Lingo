const axios = require("axios");

// Function to perform translation using Groq API
const generateTranslation = async (text, sourceLang, targetLang) => {
  try {
    const response = await axios.post(
      "https://api.groq.com/v1/translate",
      {
        text: text,
        source: sourceLang,
        target: targetLang,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.translatedText) {
      return response.data.translatedText;
    } else {
      throw new Error("Translation API did not return translated text");
    }
  } catch (error) {
    console.error(
      "Error in generateTranslation:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

module.exports = { generateTranslation };
