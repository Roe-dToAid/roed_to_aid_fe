import React from "react";
import { PropTypes } from "prop-types";
import "./NoResults.scss";

const NoResults = ({ message }) => {
  return (
    <div className="no-results-card" tabIndex={0}>
      <h2 className="empty">{message}</h2>
    </div>
  );
};

export default NoResults;

NoResults.propTypes = {
  message: PropTypes.string.isRequired,
};
