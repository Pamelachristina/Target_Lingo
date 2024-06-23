const express = require("express");
const router = express.Router();
const Translation = require("../models/Translation");
const { generateTranslation } = require("../services/groqService");

// Create a new translation
router.post("/api/translate", async (req, res) => {
  try {
    const { originalText, fromLanguage, toLanguage } = req.body;

    // Perform translation using Groq API
    const translatedText = await generateTranslation(
      originalText,
      fromLanguage,
      toLanguage
    );

    // Save to database
    const newTranslation = await Translation.create({
      originalText,
      translatedText,
      fromLanguage,
      toLanguage,
    });

    res.status(201).json(newTranslation);
  } catch (error) {
    console.error("Translation error:", error);
    res
      .status(500)
      .json({ message: "Error during translation", error: error.message });
  }
});

module.exports = router;
