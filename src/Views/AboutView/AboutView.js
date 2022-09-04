import React from "react";
import yesImage from "./../../assets/feminist-lettering-compositions-and-stickers-2-png-01.png";
import flowerSymbolImage from "./../../assets/feminist-lettering-compositions-and-stickers-2-png-07.png";
import caseyPhoto from "./../../assets/CaseyF.jpeg";
import catlynPhoto from "./../../assets/CatlynB.jpeg";
import wesPhoto from "./../../assets/WesleyG.jpeg";
import irmakPhoto from "./../../assets/IrmakE.jpeg";
import lidiaPhoto from "./../../assets/LidiaK.jpeg";
import brycePhoto from "./../../assets/BryceW.jpeg";
import rachelPhoto from "./../../assets/RachelA.jpeg";
import "./Aboutview.scss";

const AboutView = () => {
  return (
    <div className="about-container">
      <h1 data-cy="about-roed">About Roe'd to Aid</h1>
      <div className="copy-image-block">
        <div className="mission-container">
          <h2 data-cy="mission-title">Our Mission</h2>
          <p data-cy="mission-statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img className="illustration" data-cy="yes-illustration" src={yesImage} alt="person holding up fist"></img>
      </div>
      <div className="copy-image-block inclusivity-only">
        <img className="illustration" data-cy="flower-illustration" src={flowerSymbolImage} alt="female symbol with flowers"></img>
        <div className="inclusivity-container">
          <h2 data-cy="inclusivity-title">Inclusivity Counts</h2>
          <p data-cy="inclusivity-statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <h2 data-cy="meet">Meet the Team</h2>
      <div className="team-container">
        <div className="photo-container">
          <img data-cy="rachel" src={rachelPhoto} alt="headshot of Rachel"></img>
          <h3>Rachel A.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="catlyn" src={catlynPhoto} alt="headshot of Catlyn"></img>
          <h3>Catlyn B.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="irmak" src={irmakPhoto} alt="headshot of Irmak"></img>
          <h3>Irmak E.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="lidia" src={lidiaPhoto} alt="headshot of Lidia"></img>
          <h3>Lidia K.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="casey" src={caseyPhoto} alt="headshot of Casey"></img>
          <h3>Casey F.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="wes" src={wesPhoto} alt="headshot of Wes"></img>
          <h3>Wes G.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="bryce" src={brycePhoto} alt="headshot of Bryce"></img>
          <h3>Bryce W.</h3>
        </div>
      </div>
    </div>
  )
};

export default AboutView;
