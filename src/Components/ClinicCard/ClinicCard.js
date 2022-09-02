import React from "react";
import "./ClinicCard.scss";

const ClinicCard = ({ name, address, city, zip, phone, services, url }) => {
  return (
    <div className="clinic-card" data-cy="clinic-card">
      <h3 data-cy="clinic-name">{name}</h3>
      <p data-cy="clinic-address">{address}</p>
      <p data-cy="clinic-city">{city}</p>
      <p data-cy="clinic-zip">{zip}</p>
      <p data-cy="clinic-phone">{phone}</p>
      <p data-cy="clinic-services">{services}</p>
      <a href={url} target="blank" data-cy="clinic-url">
        Visit their website
        <span className="material-symbols-outlined">open_in_new</span>
      </a>
    </div>
  );
};

export default ClinicCard;
