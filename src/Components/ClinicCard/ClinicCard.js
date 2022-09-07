import React from "react";
import "./ClinicCard.scss";

const ClinicCard = ({
  name,
  address,
  city,
  state,
  zip,
  phone,
  services,
  url,
}) => {
  return (
    <div className="clinic-card" data-cy="clinic-card">
      <h3 data-cy="clinic-name">{name}</h3>
      {address && (
        <p data-cy="clinic-address" className="clinic-address">
          <span className="material-symbols-outlined">location_on</span>{" "}
          {address}{" "}
        </p>
      )}
      {city && state && zip && (
        <p data-cy="clinic-city-state-zip" className="clinic-city-state-zip">
          {city}, {state} {zip}
        </p>
      )}
      {!city && state && !zip && (
        <p data-cy="clinic-state" className="clinic-address">
          <span className="material-symbols-outlined">location_on</span> {state}
        </p>
      )}
      {phone && (
        <p data-cy="clinic-phone">
          <span className="material-symbols-outlined">phone</span> {phone}
        </p>
      )}
      {services && (
        <p data-cy="clinic-services">
          <span className="material-symbols-outlined">medical_services</span>{" "}
          {services}
        </p>
      )}
      {url && (
        <a href={url} target="blank" data-cy="clinic-url">
          <span className="material-symbols-outlined">open_in_new</span> Visit
          their website
        </a>
      )}
    </div>
  );
};

export default ClinicCard;
