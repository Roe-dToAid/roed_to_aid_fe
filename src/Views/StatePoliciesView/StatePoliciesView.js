import React, {useState} from "react";
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

  const [searchInput, setSearchInput] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  
  const generatePolicyCards = (states) => {
    return data.states.length ? states.map(state => {
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

  const searchItems = (value) => {
    setSearchInput(value)
    if (searchInput !== '') {
      const filteredData = data.states.filter((item) => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    } 
  }

  return (
    <section className='policy-body'>
      <h1 className='policy-header'>Check state abortion status</h1>
      <input 
        type='text'
        placeholder='Search for state...'
        onChange={(e) => searchItems(e.target.value)}
      />
      <div className="content-body">
        <LegalKey />
        {searchInput.length ? generatePolicyCards(filteredResults) : data ? generatePolicyCards(data.states) : <h3>Loading...</h3>}
      </div>
    </section>
    );
};

export default StatePoliciesView;