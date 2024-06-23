import React, { useState } from "react";
import axios from "axios";

const TranslationForm = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");

  const handleTranslate = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/translate`,
        {
          text,
          sourceLang,
          targetLang,
        }
      );
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  return (
    <div>
      <h1>Language Translator</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <select
        value={sourceLang}
        onChange={(e) => setSourceLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        {/* Add more language options as needed */}
      </select>
      <select
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        {/* Add more language options as needed */}
      </select>
      <button onClick={handleTranslate}>Translate</button>
      <h2>Translated Text</h2>
      <p>{translatedText}</p>
    </div>
  );
};

export default TranslationForm;
