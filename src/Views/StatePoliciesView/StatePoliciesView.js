import React, {useEffect, useState, useRef } from "react";
import { useQuery, gql } from '@apollo/client'
import PolicyCard from "./PolicyCard/PolicyCard";
import LegalKey from "./LegalKey/LegalKey";
import './StatePolicies.scss'



const GET_POLICIES = gql`
  query {
    states {
      name
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
  const inputRef = useRef(null)
  
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
    const filteredByStatus = data.states.filter((state) => state.legal === legalSearch)
    setLegalLevel(filteredByStatus)
  }

  const clearSearch = () => {
    inputRef.current.value = ''
    setLegalLevel('')
    setSearchInput('')
  }

  const generatePolicyCards = (states) => {
    return data.states.length && states.map(state => {
      return (
        <PolicyCard 
          key={state.id}
          name={state.name}
          legal={state.legal}
          legalDescription={state.legalDescription}
        />
      )
    }) 
  }

  return (
    <section className='policy-body'>
      <h1 className='policy-header'>Check state abortion status</h1>
      <div className="content-body">
        <input ref={inputRef}
          className="search"
          type='search'
          placeholder='Search for state...'
          onChange={(e) => handleSearchChange(e)}
        />
        <img src='../../assets/feminist lettering compositions and stickers 2 png-10.png'></img>
        <LegalKey filterByLegality={filterByLegality} clearSearch={clearSearch}/>
        {searchInput && legalLevel ? generatePolicyCards(filteredResults.filter(res => legalLevel.includes(res))) :
          searchInput ? generatePolicyCards(filteredResults) : 
          legalLevel ? generatePolicyCards(legalLevel)
          : data ? generatePolicyCards(data.states) : <h3>Loading...</h3>}
      </div>
    </section>
    );
};

export default StatePoliciesView;