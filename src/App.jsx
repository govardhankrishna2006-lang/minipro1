import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Counter from "./Counter";

export default function App() {
  return (
    <Router>
      <nav style={styles.nav}>
        <h2>WordApp</h2>
        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/counter" style={styles.link}>Counter</Link>
          <Link to="/about" style={styles.link}>About</Link>
        </div>
      </nav>

      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "#111",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between"
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none"
  }
};