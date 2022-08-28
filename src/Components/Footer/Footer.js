import React from "react";
import "./Footer.scss";
import logo from "./../../assets/Roe'dToAidLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <div className="footer-img-container">
          <img src={logo} alt="logo" className="logo-img"></img>
        </div>
        <div className="team-container">
          <div className="fe-container">
            FrontEnd Team: <br /> Rachel Allen <br />
            Catlyn Bowles <br /> Irmak Erdem <br /> Lidia Karpinski
          </div>
          <div className="be-container">
            BackEnd Team: <br /> Casey Fazio <br /> Wesley Garcia <br />
            Bryce Wein
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
