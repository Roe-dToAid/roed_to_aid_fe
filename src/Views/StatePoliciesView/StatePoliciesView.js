import React from "react";
import { useQuery, gql } from '@apollo/client'

const GET_POLICIES = gql`
  query {
    states {
      name
      id
      abbreviation
      legal
      legalDescription
      source
      createdAt
      updatedAt
    }
  }
`;

// const GET_POLICIES = gql`
//   query {
//     state(abbreviation: "TX") {
//       name
//       id
//       abbreviation
//       legal
//       legalDescription
//       source
//       createdAt
//       updatedAt
//     }
//   }
// `;


const StatePoliciesView = () => {
  let { data, loading, error } = useQuery(GET_POLICIES)
  if (loading) console.log('Loading...');
  if (error) console.log("error!", error.message)
  if (data) console.log(data)
  
  return <h1>policies</h1>;
};

export default StatePoliciesView;