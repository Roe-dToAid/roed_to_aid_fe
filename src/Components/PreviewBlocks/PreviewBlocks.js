import React from "react";
import { Link } from "react-router-dom";
import "./PreviewBlocks.scss";

const PreviewBlocks = () => {
  return (
    <>
      <div className="preview">
        <p>
          Find a safe place to receive an abortion and avoid these
          misinformation centers. Learn what resources are available in states
          with total bans.
        </p>
        <Link to="/clinics">
          <button>Find A Clinic</button>
        </Link>
      </div>
      <div className="preview">
        <p>
          State laws are changing now that Roe V Wade has been struck down. Find
          your state to learn more.
        </p>
        <Link to="/states-policies">
          <button>Check State Status</button>
        </Link>
      </div>
      <div className="preview">
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
