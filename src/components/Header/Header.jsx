import React from "react";

import Button from "../Button/Button";
import { gray, green } from "../../colors";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header__header">
      <a href="#">
        <h3>Musikalis</h3>
      </a>

      <nav className="Header__nav">
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

      <div className="Header__auth-btns">
        <a href="#">Sign in</a>
        <Button label="Sign Up" backgroundColor={`rgb(${green})`} />
      </div>
    </header>
  );
};

export default Header;
