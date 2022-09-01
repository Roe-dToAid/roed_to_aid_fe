import React, {useEffect, useState} from "react";
import { useQuery, gql } from '@apollo/client'
import PolicyCard from "./PolicyCard/PolicyCard";
import LegalKey from "./LegalKey/LegalKey";
import './StatePolicies.scss'
import { clear } from "@testing-library/user-event/dist/clear";

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
  const [legalLevel, setLegalLevel] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  
  const handleSearchChange = event => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
      if (searchInput !== '') {
      const filteredData = data.states.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
      setFilteredResults(filteredData)
    }
  }, [searchInput]);

  const filterByLegality = (legalSearch) => {
    setSearchInput('')
    const filteredByStatus = data.states.filter((state) => state.legal === legalSearch)
    setLegalLevel(filteredByStatus)
  }

  const clearSearch = () => {
    setLegalLevel('')
    setSearchInput('')
  }

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

  return (
    <section className='policy-body'>
      <h1 className='policy-header'>Check state abortion status</h1>
      <div className="content-body">
        <input className="search"
          type='search'
          placeholder='Search for state...'
          onChange={(e) => handleSearchChange(e)}
        />
        <LegalKey filterByLegality={filterByLegality} clearSearch={clearSearch}/>
        {searchInput ? generatePolicyCards(filteredResults) : 
          legalLevel ? generatePolicyCards(legalLevel)
          : data ? generatePolicyCards(data.states) : <h3>Loading...</h3>}
      </div>
    </section>
    );
};

export default StatePoliciesView;