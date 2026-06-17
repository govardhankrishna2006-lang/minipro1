import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h2>📝 Word Counter App</h2>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <hr />
    </div>
  );
}