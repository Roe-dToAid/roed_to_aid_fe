import React from 'react';
import { Link } from 'react-router-dom';
import clinic_img from './../../assets/Asset 26.svg';
import gavel_img from './../../assets/Asset 31.svg';
import speaker_img from './../../assets/Asset 28.svg';

import './PreviewBlocks.scss';

const PreviewBlocks = () => {
  return (
    <>
      <div className="preview">
        <img
          src={clinic_img}
          alt="illustration of uterus"
          className="icon"
        ></img>
        <p tabIndex={0}>
          Find a safe place to receive an abortion and avoid misinformation
          centers. Learn what resources are available in states with total bans.
        </p>
        <Link to="/clinics">
          <button data-cy="find-clinic-button">FIND A CLINIC</button>
        </Link>
      </div>
      <div className="preview">
        <img src={gavel_img} alt="illustration of gavel" className="icon"></img>

        <p tabIndex={0}>
          After Roe v. Wade was overturned on June 24, 2022, abortion policy is
          in the hands of the states. Find your state to learn more.
        </p>
        <Link to="/states-policies">
          <button data-cy="check-status-button">CHECK STATE STATUS</button>
        </Link>
      </div>
      <div className="preview">
        <img
          src={speaker_img}
          alt="illustration of megaphone"
          className="icon"
        ></img>
        <p tabIndex={0}>
          We are driven by the cause. We believe in inclusivity, access, and
          education to keep birthers safe.
        </p>
        <Link to="/about">
          <button data-cy="learn-more-button">LEARN MORE</button>
        </Link>
      </div>
    </>
  );
};

export default PreviewBlocks;
