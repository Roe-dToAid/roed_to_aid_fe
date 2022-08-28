import React from "react";
import "./NavBar.scss";
import logo from "./../../assets/Roe'dToAidLogo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav-container">
      <Link to="/" className="logo-link">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img"></img>
          <div className="nav-tabs">
            <h1>ABOUT</h1>
            <h1>FIND A CLINIC</h1>
            <h1>STATE STATUS</h1>
          </div>
        </div>
      </Link>
    </nav>
  );
};
