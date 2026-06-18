import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";
import About from "./About";

export default function App() {
  return (
    <Router>
      <nav style={styles.nav}>

        {/* LEFT LOGO */}
        <div style={styles.logo}>
          WORDAPP
        </div>

        {/* CENTER MENU */}
        <div style={styles.menu}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/counter" style={styles.link}>Counter</Link>
          <Link to="/about" style={styles.link}>About</Link>
        </div>

      </nav>

      <div style={{ marginTop: "60px" }}>
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
    height: "60px",
    background: "#111",
    display: "flex",
    alignItems: "center",
  },

  logo: {
    position: "absolute",
    left: "20px",   // ⭐ LEFT SIDE
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
  },

  menu: {
    margin: "0 auto",  // ⭐ CENTER MENU
    display: "flex",
    gap: "40px",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
};