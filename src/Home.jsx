import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to WordApp 🚀</h1>
      <p>Your advanced word counter tool</p>

      <Link to="/counter">
        <button style={styles.button}>
          Click on Counter
        </button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  button: {
    marginTop: "20px",
    padding: "12px 25px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
  },
};