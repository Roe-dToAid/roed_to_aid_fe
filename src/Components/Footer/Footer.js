import React from "react";
import "./Footer.scss";
import logo from "./../../assets/roed-to-aid-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="logo-img"></img>
      <div className="team-container">
        <div className="fe-container">
          <p>FrontEnd Team:</p>
          <a
            href="https://github.com/Rallen13/"
            target="blank"
            data-cy="git-hub-link-rachel"
          >
            Rachel Allen
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
          <a
            href="https://github.com/catlynbowles"
            target="blank"
            data-cy="git-hub-link-catlyn"
          >
            Catlyn Bowles
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
          <a
            href="https://github.com/irmakerdem"
            target="blank"
            data-cy="git-hub-link-irmak"
          >
            Irmak Erdem
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
          <a
            href="https://github.com/lkarpins"
            target="blank"
            data-cy="git-hub-link-lidia"
          >
            Lidia Karpinski
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
        <div className="be-container">
          <p>BackEnd Team:</p>
          <a
            href="https://github.com/casefaz"
            target="blank"
            data-cy="git-hub-link-casey"
          >
            Casey Fazio
            <span className="material-symbols-outlined">open_in_new</span>
          </a> 
          <a
            href="https://github.com/wesatt"
            target="blank"
            data-cy="git-hub-link-wesley"
          >
            Wesley Garcia
            <span className="material-symbols-outlined">open_in_new</span>
          </a> 
          <a
            href="https://github.com/bwbolt"
            target="blank"
            data-cy="git-hub-link-bryce"
          >
            Bryce Wein
            <span className="material-symbols-outlined">open_in_new</span>
          </a> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
