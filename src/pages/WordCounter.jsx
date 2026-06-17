import React, { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const characters = text.length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;

  return (
    <div>
      <h1>Word Counter 📝</h1>

      <textarea
        rows="6"
        cols="40"
        placeholder="Type something here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <h3>Results:</h3>
        <p>Words: {words}</p>
        <p>Characters: {characters}</p>
        <p>Sentences: {sentences}</p>
      </div>
    </div>
  );
}