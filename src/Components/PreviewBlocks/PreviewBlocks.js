import React from "react";
import { Link } from "react-router-dom";
import clinic_img from "./../../assets/Asset 26.svg";
import gavel_img from "./../../assets/Asset 31.svg";
import speaker_img from "./../../assets/Asset 28.svg";

import "./PreviewBlocks.scss";

const PreviewBlocks = () => {
  return (
    <>
      <div className="preview">
        <img src={clinic_img} alt="image-of-uterus" className="icon"></img>
        <p>
          Find a safe place to receive an abortion and avoid misinformation
          centers. Learn what resources are available in states with total bans.
        </p>
        <Link to="/clinics">
          <button>Find A Clinic</button>
        </Link>
      </div>
      <div className="preview">
        <img src={gavel_img} alt="image-of-gavel" className="icon"></img>

        <p>
          After Roe v. Wade was overturned on June 24, 2022, abortion policy is
          in the hands of the states. Find your state to learn more.
        </p>
        <Link to="/states-policies">
          <button>Check State Status</button>
        </Link>
      </div>
      <div className="preview">
        <img src={speaker_img} alt="image-of-speaker" className="icon"></img>
        <p>
          We are driven by the cause. We believe in inclusivity, access, and
          education to keep birthers safe.
        </p>
        <Link to="/about">
          <button>Learn More</button>
        </Link>
      </div>
    </>
  );
};

export default PreviewBlocks;
