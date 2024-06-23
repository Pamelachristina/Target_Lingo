// src/App.js
import React from "react";
import TranslationForm from "./components/TranslationForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Language Translator App</h1>
      </header>
      <main>
        <TranslationForm />
      </main>
    </div>
  );
}

export default App;
