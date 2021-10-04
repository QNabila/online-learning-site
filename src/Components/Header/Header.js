import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const activeStyle = {
      fontWeight: "bold"
  };
  return (
    <div className="header">
      <nav>
        <NavLink activeStyle={activeStyle} id="page-name" to="/home">
          Home
        </NavLink>
        <NavLink activeStyle={activeStyle} id="page-name" to="/about">
          About
        </NavLink>
        <NavLink activeStyle={activeStyle} id="page-name" to="/contact">
          Contact
        </NavLink>
        <NavLink activeStyle={activeStyle} id="page-name" to="/services">
          Services
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
