import React from "react";
import ClinicCard from "../ClinicCard/ClinicCard";
import "./ClinicCardContainer.scss";

const ClinicCardContainer = ({ states }) => {
  console.log(states);
  const misinformationCenters = states.map((state) => {
    return state.misinformationCenters.map((clinic) => {
      return (
        <ClinicCard
          key={clinic.id}
          name={clinic.name}
          address={clinic.address}
          city={clinic.city}
        />
      );
    });
  });
  const authorizedClinics = states.map((state) => {
    return state.authorizedClinics.map((clinic) => {
      return (
        <ClinicCard
          key={clinic.id}
          name={clinic.name}
          address={clinic.address}
          city={clinic.city}
          zip={clinic.zip}
          phone={clinic.phone}
          services={clinic.services}
          url={clinic.website}
        />
      );
    });
  });
  return (
    <section className="all-clinics-card-container">
      <div className="authorized-card-container">{authorizedClinics}</div>
      <div className="misinformation-card-container">
        {misinformationCenters}
      </div>
    </section>
  );
};

export default ClinicCardContainer;
