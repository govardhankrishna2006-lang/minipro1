import { useState } from "react";

export default function Counter() {
  const [text, setText] = useState("");

  const words =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const chars = text.length;

  return (
    <div style={styles.app}>
      <div style={styles.card}>
        <h1>🚀 Word Counter</h1>

        <textarea
          style={styles.textarea}
          placeholder="Type your text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div style={styles.stats}>
          <div style={styles.box}>
            <h2>{words}</h2>
            <p>Words</p>
          </div>

          <div style={styles.box}>
            <h2>{chars}</h2>
            <p>Characters</p>
          </div>
        </div>

        <button style={styles.button} onClick={() => setText("")}>
          Clear
        </button>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 70px)",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    width: "400px",
    textAlign: "center",
  },
  textarea: {
    width: "100%",
    height: "120px",
    margin: "15px 0",
    padding: "10px",
    borderRadius: "10px",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  box: {
    width: "45%",
    background: "#f1f3f6",
    padding: "10px",
    borderRadius: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#667eea",
    color: "white",
  },
};