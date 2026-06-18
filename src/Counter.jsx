import { useState } from "react";

export default function Counter() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const characters = text.length;
  const charactersNoSpace = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;
  const readingTime = (words * 0.008).toFixed(2);

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const clearText = () => setText("");
  const removeSpaces = () => setText(text.replace(/\s+/g, " ").trim());
  const copyText = () => navigator.clipboard.writeText(text);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>🚀 Advanced Word Counter</h1>

        <textarea
          style={styles.textarea}
          placeholder="Type or paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div style={styles.stats}>
          <div style={styles.box}><h3>{words}</h3><p>Words</p></div>
          <div style={styles.box}><h3>{characters}</h3><p>Characters</p></div>
          <div style={styles.box}><h3>{charactersNoSpace}</h3><p>No Space</p></div>
          <div style={styles.box}><h3>{sentences}</h3><p>Sentences</p></div>
          <div style={styles.box}><h3>{readingTime}</h3><p>Minutes</p></div>
        </div>

        <div style={styles.buttons}>
          <button onClick={toUpper}>UPPERCASE</button>
          <button onClick={toLower}>lowercase</button>
          <button onClick={removeSpaces}>Remove Spaces</button>
          <button onClick={copyText}>Copy</button>
          <button onClick={clearText}>Clear</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },

  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    width: "500px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  textarea: {
    width: "100%",
    height: "120px",
    margin: "15px 0",
    padding: "10px",
    borderRadius: "10px",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    marginBottom: "15px",
  },

  box: {
    background: "#f1f3f6",
    padding: "10px",
    borderRadius: "10px",
  },

  buttons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  },
};