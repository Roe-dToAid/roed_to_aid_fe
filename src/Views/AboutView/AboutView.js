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
      <h1 tabindex="0" data-cy="about-roed">About Roe'dtoAid</h1>
      <div className="copy-image-block">
        <div className="mission-container">
          <h2 tabindex="0" data-cy="mission-title">Our Mission</h2>
          <p tabindex="0" data-cy="mission-statement">Our mission is to make abortion clinics information accessible to everyone in the US.</p>
        </div>
        <img tabindex="0" className="illustration" data-cy="yes-illustration" src={yesImage} alt="person holding up fist"></img>
      </div>
      <div className="copy-image-block inclusivity-only">
        <img tabindex="0" className="illustration" data-cy="flower-illustration" src={flowerSymbolImage} alt="female symbol with flowers"></img>
        <div className="inclusivity-container">
          <h2 tabindex="0" data-cy="inclusivity-title">Inclusivity Counts</h2>
          <p tabindex="0" data-cy="inclusivity-statement">Abortion affects everyone. Regardless of your income, gender, sexual orientation, race, and other characteristics, we all must stay informed about current laws. Abortion is essential.</p>
        </div>
      </div>
      <h2 tabindex="0" data-cy="meet">Meet the Team</h2>
      <div className="team-container">
        <div className="photo-container">
          <img tabindex="0" data-cy="rachel" src={rachelPhoto} alt="headshot of Rachel"></img>
          <h3 tabindex="0">Rachel A.</h3>
        </div>
        <div className="photo-container">
          <img tabindex="0" data-cy="catlyn" src={catlynPhoto} alt="headshot of Catlyn"></img>
          <h3 tabindex="0">Catlyn B.</h3>
        </div>
        <div className="photo-container">
          <img tabindex="0" data-cy="irmak" src={irmakPhoto} alt="headshot of Irmak"></img>
          <h3 tabindex="0">Irmak E.</h3>
        </div>
        <div className="photo-container">
          <img tabindex="0" data-cy="lidia" src={lidiaPhoto} alt="headshot of Lidia"></img>
          <h3 tabindex="0">Lidia K.</h3>
        </div>
        <div className="photo-container">
          <img tabindex="0"data-cy="casey" src={caseyPhoto} alt="headshot of Casey"></img>
          <h3 tabindex="0">Casey F.</h3>
        </div>
        <div className="photo-container">
          <img tabindex="0" data-cy="wes" src={wesPhoto} alt="headshot of Wes"></img>
          <h3 tabindex="0">Wes G.</h3>
        </div>
        <div className="photo-container">
          <img tabindex="0" data-cy="bryce" src={brycePhoto} alt="headshot of Bryce"></img>
          <h3 tabindex="0">Bryce W.</h3>
        </div>
      </div>
      <div className="data-statement">
        <p tabindex="0">The data on this website was last updated on September 6, 2022.</p>
        <p tabindex="0">For most up to date information, please go <a href="https://www.abortionfinder.org">here</a>.</p>
      </div>
    </div>
  )
};

export default AboutView;
