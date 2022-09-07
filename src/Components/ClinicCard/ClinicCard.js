import React from "react";
import { PropTypes } from "prop-types";
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
  ariaStatus,
}) => {
  return (
    <div className="clinic-card" data-cy="clinic-card" tabIndex={0}>
      <span aria-label={ariaStatus}></span>

      <h3 data-cy="clinic-name">{name}</h3>
      {address && (
        <p
          data-cy="clinic-address"
          className="clinic-address"
          aria-label={`Location: ${address}.`}
        >
          <span className="material-symbols-outlined">location_on</span>{" "}
          {address}{" "}
        </p>
      )}
      {city && state && zip && (
        <p
          data-cy="clinic-city-state-zip"
          className="clinic-city-state-zip"
          aria-label={`${city}, ${state} ${zip}.`}
        >
          {city}, {state} {zip}
        </p>
      )}
      {!city && state && !zip && (
        <p
          data-cy="clinic-state"
          className="clinic-address"
          aria-label={`State: ${state}.`}
        >
          <span className="material-symbols-outlined">location_on</span> {state}
        </p>
      )}
      {phone && (
        <p data-cy="clinic-phone" aria-label={`Phone: ${phone}.`}>
          <span className="material-symbols-outlined">phone</span> {phone}
        </p>
      )}
      {services && (
        <p
          data-cy="clinic-services"
          aria-label={`Medical services: ${services}.`}
        >
          <span className="material-symbols-outlined">medical_services</span>{" "}
          {services}
        </p>
      )}
      {url && (
        <a
          href={url}
          target="blank"
          data-cy="clinic-url"
          aria-label="Open their website in a new tab"
        >
          <span className="material-symbols-outlined">open_in_new</span> Visit
          their website
        </a>
      )}
    </div>
  );
};

export default ClinicCard;

ClinicCard.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  phone: PropTypes.string,
  services: PropTypes.string,
  url: PropTypes.string,
  ariaStatus: PropTypes.string,
};
