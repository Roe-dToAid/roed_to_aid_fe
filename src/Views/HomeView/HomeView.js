import React from "react";
import "./HomeView.scss";
import groupImage from "./../../assets/DiverseGroup.png";

import InformationBlock from "../../Components/InformationBlock/InformationBlock";
const HomeView = () => {
  return (
    <div className="home-container">
      <div className="welcome-container-">
        <img
          src={groupImage}
          alt="image-of-diverse-people"
          className="group-image"
        ></img>

        <h2>A safe space to find a safe place.</h2>
      </div>
      <br />
      <br />
      <div className="information-block">
        <InformationBlock />
      </div>
    </div>
  );
};

export default HomeView;
