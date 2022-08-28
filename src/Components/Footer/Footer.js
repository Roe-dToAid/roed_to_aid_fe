import React from "react";
import "./Footer.scss";
import logo from "./../../assets/Roe'dToAidLogo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <a>
        FrontEnd Team: Rachel Allen Catlyn Bowles Irmak Erdem Lidia Karpinski
        <br />
        BackEnd Team: Casey Fazio Wesley Garcia Bryce Wein
      </a>
    </footer>
  );
};
