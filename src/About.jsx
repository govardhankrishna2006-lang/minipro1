export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>ℹ️ About</h1>
        <p>This app counts words and characters in real time.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 70px)",
    background: "#f4f4f4"
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  }
};