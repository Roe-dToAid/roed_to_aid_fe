import React from "react";
import { useQuery, gql } from '@apollo/client'
import PolicyCard from "./PolicyCard/PolicyCard";
import LegalKey from "./LegalKey/LegalKey";
import './StatePolicies.scss'


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
    const GET_POLICIES = gql`
      query {
        states {
          id
          name
          abbreviation
          legal
          legalDescription
        }
      }
    `;
    
    
const StatePoliciesView = () => {
  let { data, loading, error } = useQuery(GET_POLICIES)
  if (loading) console.log('Loading...');
  if (error) console.log("error!", error.message)
  if (data) console.log(data)
  
  const policyCards = () => {
    return data.states.length ? data.states.map(state => {
      return (
        <PolicyCard 
          id={state.id}
          key={state.id}
          name={state.name}
          abbreviation={state.abbreviation}
          legal={state.legal}
          legalDescription={state.legalDescription}
        />
      )
    }) : null
  }

  return (
    <section className='policy-body'>
      <h1 className='policy-header'>Check State Abortion Status</h1>
      <div className="content-body">
        <LegalKey />
        {data ? policyCards() : <h3>Loading...</h3>}
      </div>
    </section>
    );
};

export default StatePoliciesView;