import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./ClinicCard.scss";

const GET_CLINICS = gql`
  query {
    states {
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

const ClinicCard = ({states}) => {
  let { data, loading, error } = useQuery(GET_CLINICS);
  if (loading) console.log("Loading...");
  if (error) console.log("error!", error.message);
  if (data) console.log(data);

  return (
    <div className="clinic-card" data-cy="clinic-card">
      <h2 data-cy="misinformation-clinic-name">
        {states.name.misinformationCenters.name}
      </h2>
      <h2 data-cy="misinformation-clinic-address">
        {states.name.misinformationCenters.address}
      </h2>
    </div>
  );
};

export default ClinicCard;
