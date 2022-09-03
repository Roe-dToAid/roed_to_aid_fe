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
        <Link to="/clinics" className="nav-tabs" data-cy="find-clinic-tab">
          <p>FIND A CLINIC</p>
        </Link>
        <Link to="/states-policies" className="nav-tabs" data-cy="state-tab">
          <p>STATE STATUS</p>
        </Link>
        <Link to="/about" className="nav-tabs" data-cy="about-tab">
          <p>ABOUT</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
