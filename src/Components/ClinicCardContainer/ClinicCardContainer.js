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
        />
      );
    });
  });
  return (
    <section className="clinic-card-container">{misinformationCenters}</section>
  );
};

export default ClinicCardContainer;
