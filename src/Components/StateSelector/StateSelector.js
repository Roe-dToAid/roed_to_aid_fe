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
  return (
    <select name="state" value={this.state.number} data-cy="input-number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
  );
};

export default StateSelector;
