import React from "react";
import "./NavBar.scss";
import logo from "./../../assets/roed-to-aid-logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <Link to="/" className="logo-link">
        <img src={logo} alt="logo" className="logo-img"></img>
      </Link>
      <div className="nav-tabs-container">
        <Link to="/about" className="nav-tabs">
          <p>ABOUT</p>
        </Link>
        <Link to="/clinics" className="nav-tabs">
          <p>FIND A CLINIC</p>
        </Link>
        <Link to="/states-policies" className="nav-tabs">
          <p>STATE STATUS</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
