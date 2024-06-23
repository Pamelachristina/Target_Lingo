const express = require("express");
const router = express.Router();
const Translation = require("../models/Translation");

// Get all translations
router.get("/", async (req, res) => {
  try {
    const translations = await Translation.findAll();
    res.json(translations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single translation
router.get("/:id", async (req, res) => {
  try {
    const translation = await Translation.findByPk(req.params.id);
    if (translation) {
      res.json(translation);
    } else {
      res.status(404).json({ message: "Translation not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new translation
router.post("/", async (req, res) => {
  try {
    const newTranslation = await Translation.create(req.body);
    res.status(201).json(newTranslation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add more routes as needed

module.exports = router;
