import React, {useEffect, useState, useRef } from "react";
import { useQuery, gql } from '@apollo/client'
import PolicyCard from "./PolicyCard/PolicyCard";
import LegalKey from "./LegalKey/LegalKey";
import fight from "./../../assets/fight.png";
import female from "./../../assets/female.png";
import NoResults from "./NoResults/NoResults";
import SearchBar from './SearchBar/SearchBar'
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
  
  const handleSearchChange = (value) => {
    setSearchInput(value);
  };
  
  useEffect(() => {
    if (searchInput !== '') {
      const filteredData = data.states.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
      setFilteredResults(filteredData)
    }
  }, [searchInput]);
  
  const generatePolicyCards = (states) => {
    return states.length ? states.map(state => {
      return (
        <PolicyCard 
          key={state.id}
          name={state.name}
          legal={state.legal}
          legalDescription={state.legalDescription}
        />
      )
    }) : <NoResults />
  }

  const filterByLegality = (legalSearch) => {
    const filteredByStatus = data.states.filter((state) => state.legal === legalSearch)
    setLegalLevel(filteredByStatus)
  }

  const clearSearch = () => {
    inputRef.current.value = ''
    setLegalLevel('')
    setSearchInput('')
  }

  return (
    <section className='policy-body'>
      <h1 className='policy-header'>Check state abortion status</h1>
      <div className="content-body">
        <SearchBar inputRef={inputRef} handleSearchChange={handleSearchChange}/>
        <div className='key-container'>
          <img src={fight} height='200' alt='fight for your right megaphone'></img>
          <LegalKey filterByLegality={filterByLegality} clearSearch={clearSearch}/>
          <img src={female} height='200' alt='future is female with fists'></img>
        </div>
          {searchInput && legalLevel ? generatePolicyCards(filteredResults.filter(res => legalLevel.includes(res))) :
            searchInput ? generatePolicyCards(filteredResults) : 
            legalLevel ? generatePolicyCards(legalLevel) :
            data ? generatePolicyCards(data.states) : <h3>Loading...</h3>}
      </div>
    </section>
    );
};

export default StatePoliciesView;