import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Navbar.css';

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="#home">
        Home
      </a>

      <a className="menu-item" href="#about">
        AboutMe
      </a>

      <a className="menu-item" href="#experiences">
        Experiences
      </a>

      <a className="menu-item" href="#abilities">
        Abilities
      </a>

      <a className="menu-item" href="#contact">
        ContactMe
      </a>
    </Menu>
  );
};
