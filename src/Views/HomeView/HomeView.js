import React from 'react';
import groupImage from './../../assets/roed-to-aid-hero.jpg';
import InformationBlock from '../../Components/InformationBlock/InformationBlock';
import PreviewBlocks from '../../Components/PreviewBlocks/PreviewBlocks';
import QuoteBlock from '../../Components/QuoteBlock/QuoteBlock';
import './HomeView.scss';
import IntroductionBlock from '../../Components/IntroductionBlock/IntroductionBlock';

const HomeView = () => {
  return (
    <div className="home-container">
      <div className="welcome-container">
        <img
          src={groupImage}
          alt="illustration of diverse people"
          className="group-image"
          data-cy="group-image"
        ></img>
      </div>
      <div className="introduction-block-container">
        <IntroductionBlock />
      </div>
      <div className="information-block-container">
        <InformationBlock />
      </div>
      <div
        className="preview-block-container"
        data-cy="preview-block-container"
      >
        <PreviewBlocks />
      </div>
      <div className="quote-block-container">
        <QuoteBlock />
      </div>
    </div>
  );
};

export default HomeView;
