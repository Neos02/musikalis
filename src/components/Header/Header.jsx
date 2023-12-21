import React, { useState } from "react";

import Button from "../Button/Button";
import { green } from "../../colors";
import "./Header.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="Header__header">
      <a href="#">
        <h3>Musikalis</h3>
      </a>

      <nav className={`Header__nav ${menuOpen ? "Header__open" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Advisor</a>
          </li>
        </ul>
      </nav>

      <div className={`Header__auth-btns ${menuOpen ? "Header__open" : ""}`}>
        <a href="#">Sign in</a>
        <Button label="Sign Up" backgroundColor={`rgb(${green})`} />
      </div>

      <Button
        className="Header__toggle-btn"
        icon={menuOpen ? faXmark : faBars}
        backgroundColor="transparent"
        textColor="white"
        onClick={() => setMenuOpen((prevMenuOpen) => !prevMenuOpen)}
        aria-label="Menu"
      />
    </header>
  );
};

export default Header;
