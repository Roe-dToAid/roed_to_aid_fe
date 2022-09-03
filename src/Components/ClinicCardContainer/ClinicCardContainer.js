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
          state={state.name}
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
          state={state.name}
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
      <h2>Authorized Clinics</h2>
      <div className="card-container authorized-card-container">
        {authorizedClinics}
      </div>
      <h2>Misinformation Centers</h2>
      <div className="card-container misinformation-card-container">
        {misinformationCenters}
      </div>
    </section>
  );
};

export default ClinicCardContainer;
