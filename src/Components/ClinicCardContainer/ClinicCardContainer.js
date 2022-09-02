import React from "react";
import { useQuery, gql } from "@apollo/client";
import ClinicCard from "./ClinicCard";
import "./ClinicCardContainer.scss";

const GET_CLINICS = gql`
  query {
    states {
      id
      name
      misinformationCenters {
        name
        address
        source
        city
        zip
      }
    }
  }
`;

const ClinicCardContainer = ({ states }) => {
  let { data, loading, error } = useQuery(GET_CLINICS);
  if (loading) console.log("Loading...");
  if (error) console.log("error!", error.message);
  if (data) console.log(data);
  const renderedCards = states.map((state) => {
    return (
      <ClinicCard
        key={state.id}
        name={state.misinformationCenters.name}
        address={state.misinformationCenter.address}
      />
    );
  });

  return <section className="clinic-card-container">{renderedCards}</section>;
};

export default ClinicCardContainer;
