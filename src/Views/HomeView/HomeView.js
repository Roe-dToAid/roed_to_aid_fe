import React from "react";
import groupImage from "./../../assets/DiverseGroup.png";
import InformationBlock from "../../Components/InformationBlock/InformationBlock";
import PreviewBlocks from "../../Components/PreviewBlocks/PreviewBlocks";

import "./HomeView.scss";

const HomeView = () => {
  return (
    <div className="home-container">
      <div className="welcome-container">
        <img
          src={groupImage}
          alt="image-of-diverse-people"
          className="group-image"
        ></img>
        <h2>A safe space to find a safe place.</h2>
      </div>
      <div className="information-block-container">
        <InformationBlock />
      </div>
      <div className="preview-block-container">
        <PreviewBlocks />
      </div>
    </div>
  );
};

export default HomeView;
