import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WordCounter from "./pages/WordCounter";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<WordCounter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}