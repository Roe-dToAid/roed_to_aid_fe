import React from "react";
import myBodyImage from "./../../assets/feminist lettering compositions and stickers 2 png-03.png";
import { useQuery, gql } from "@apollo/client";
import "./ClinicsView.scss";

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
        <img
          src={myBodyImage}
          alt="illustration of woman"
          className="my-body-image"
        ></img>
      </div>
    </>
  );
};

export default ClinicsView;
