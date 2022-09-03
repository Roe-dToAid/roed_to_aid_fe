import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./ClinicsView.scss";
import ClinicKeyBlock from "../../Components/ClinicKeyBlock/ClinicKeyBlock";
import ToggleClinicsButton from "../../Components/ToggleClinicsButton/ToggleClinicsButton";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ClinicCardContainer from "../../Components/ClinicCardContainer/ClinicCardContainer";

const GET_CLINICS = gql`
  query {
    states {
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

  const [states, setStates] = useState([]);
  useEffect(() => {
    if (!loading) {
      setStates(data.states);
    }
  }, [loading, data]);

  return (
    <>
      <h1>Find a safe clinic</h1>
      <div className="heading-container">
        <ClinicKeyBlock />
        <div>
          <SearchBar />
          <ToggleClinicsButton />
        </div>
      </div>
      {!loading && <ClinicCardContainer states={states} />}
    </>
  );
};

export default ClinicsView;
