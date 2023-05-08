import React from "react";

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        <img className="icon" src="ai-robot.png" alt="Home" />
        <span>Animate</span>
      </a>
      <ul>
        <li>
          <a className="bar" href="/about">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
