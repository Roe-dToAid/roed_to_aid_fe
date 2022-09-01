import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./StateSelector.scss";

const GET_STATES = gql`
  query {
    states {
      name
    }
  }
`;

const StateSelector = () => {
  let { data, loading, error } = useQuery(GET_STATES);
  if (loading) console.log("Loading...");
  if (error) console.log("error!", error.message);
  if (data) console.log(data);
  return <div></div>;
};

export default StateSelector;
