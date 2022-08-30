import React from "react";
import "./NavBar.scss";
import logo from "./../../assets/Roe'dToAidLogo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
        <Link to="/" className="logo-link">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo-img"></img>
          </div>
        </Link>
            <div className="nav-tabs">
              <Link to="/about" className="nav-tabs">
                <h1>ABOUT</h1>
              </Link>
              <Link to="/clinics" className="nav-tabs">
                <h1>FIND A CLINIC</h1>
              </Link>
              <Link to='/states-policies' className="nav-tabs">
                <h1>STATE STATUS</h1>
              </Link>
          </div>
    </nav>
  );
};

export default NavBar;
