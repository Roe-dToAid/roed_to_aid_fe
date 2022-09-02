import React from "react";
import "./ClinicCard.scss";

const ClinicCard = ({ name, address }) => {
  return (
    <div className="clinic-card" data-cy="clinic-card">
      <h2 data-cy="misinformation-clinic-name">
        {name}
      </h2>
      <h2 data-cy="misinformation-clinic-address">
        {address}
      </h2>
    </div>
  );
};

export default ClinicCard;
