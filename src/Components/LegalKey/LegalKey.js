import React from "react";
import { PropTypes } from "prop-types";

const LegalKey = ({ filterByLegality, clearSearch }) => {
  return (
    <div className="legal-key" data-cy="legal-key">
      <h2
        className="clear"
        role="button"
        tabIndex="0"
        onClick={() => clearSearch()}
      >
        ALL STATES
      </h2>
      <h2
        className="legal"
        data-cy="legal"
        role="button"
        tabIndex="0"
        onClick={() => filterByLegality("legal")}
      >
        LEGAL
      </h2>
      <h2
        className="at-risk"
        data-cy="at-risk"
        role="button"
        tabIndex="0"
        onClick={() => filterByLegality("at risk")}
      >
        AT RISK
      </h2>
      <h2
        className="illegal"
        data-cy="illegal"
        role="button"
        tabIndex="0"
        onClick={() => filterByLegality("illegal")}
      >
        ILLEGAL
      </h2>
    </div>
  );
};

export default LegalKey;

LegalKey.propTypes = {
  filterByLegality: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};
