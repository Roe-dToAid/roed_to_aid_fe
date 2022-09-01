import React from "react";
import myBodyImage from "./../../assets/feminist lettering compositions and stickers 2 png-03.png";
import "./ClinicKeyBlock.scss";

const ClinicKeyBlock = () => {
  return (
    <div className="clinic-key-block-container">
      <div className="authorized-key-block">
        <div className="authorized-header">
          <h2>Authorized</h2>
        </div>
        <p>
          Blue clinics are verified safe and provide access to abortion care.
        </p>
      </div>
      <img
        src={myBodyImage}
        alt="illustration of woman"
        className="my-body-image"
      ></img>
      <div className="misinformation-key-block">
        <div className="misinformation-header">
          <h2>Misinformation</h2>
        </div>
        <p>
          Red clinics are "crisis centers" and are considered unsafe/harmful.
        </p>
      </div>
    </div>
  );
};

export default ClinicKeyBlock;
