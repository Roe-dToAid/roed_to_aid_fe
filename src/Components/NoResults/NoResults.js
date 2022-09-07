import React from 'react';
import './NoResults.scss';

const NoResults = ({ message }) => {
  return (
    <div className="no-results-card" tabIndex={0}>
      <h2 className="empty">{message}</h2>
    </div>
  );
};

export default NoResults;
