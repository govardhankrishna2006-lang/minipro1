export default function Home() {
  return (
    <div style={styles.page}>
      <h1>🏠 Home</h1>
      <p>Welcome to Word Counter App 🚀</p>
      <p>CLICK ON COUNTER</p>
    </div>
  );
}

const styles = {
  page: {
    textAlign: "center",
    padding: "40px"
  }
};