import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./ClinicsView.scss";
import ClinicKeyBlock from "../../Components/ClinicKeyBlock/ClinicKeyBlock";

const GET_CLINICS = gql`
  query {
    state(abbreviation: "TX") {
      name
      id
      abbreviation
      resources {
        id
        stateId
        name
        website
        service
        active
        bipocFocus
      }
      misinformationCenters {
        id
        stateId
        name
        address
        source
        city
        zip
      }
      authorizedClinics {
        id
        stateId
        name
        city
        zip
        phone
        services
        website
        address
        source
      }
    }
  }
`;

const ClinicsView = () => {
  let { data, loading, error } = useQuery(GET_CLINICS);
  if (loading) console.log("Loading...");
  if (error) console.log("error!", error.message);
  if (data) console.log(data);

  return (
    <>
      <h2>Find a safe clinic</h2>
      <div className="heading-container">
        <ClinicKeyBlock />
      </div>
    </>
  );
};

export default ClinicsView;
