import React from "react";
import { PropTypes } from "prop-types";
import "./PolicyCard.scss";

const PolicyCard = ({ name, legal, legalDescription }) => {
  const setColor = () => {
    return legal === "at risk"
      ? "#D27736"
      : legal === "illegal"
      ? "#DF6349"
      : "#768CA0";
  };

  return (
    <article
      data-cy="info-strip"
      className="info-strip"
      style={{ border: '.25rem solid' + setColor() }}
    >
      <div
        tabIndex="0"
        data-cy="name-container"
        className="name-container"
        style={{ backgroundColor: setColor() }}
      >
        <h2>{name}</h2>
      </div>
      <div tabIndex="0" className="legal-description">
        <p>{legalDescription}</p>
      </div>
    </article>
  );
};

export default PolicyCard;

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
  legal: PropTypes.string.isRequired,
  legalDescription: PropTypes.string.isRequired,
};
