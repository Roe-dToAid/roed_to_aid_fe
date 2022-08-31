import React from "react";
import "./HomeView.scss";
import groupImage from "./../../assets/BackgroundRemoved.png";
const HomeView = () => {
  return (
    <div className="welcome-container">
      <img
        src={groupImage}
        alt="image-of-diverse-people"
        className="people-img"
      ></img>
      <h1>A safe space to find a safe place.</h1>
    </div>
  );
};

export default HomeView;
