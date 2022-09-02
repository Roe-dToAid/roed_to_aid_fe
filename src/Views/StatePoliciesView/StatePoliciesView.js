import React, {useEffect, useState, useRef } from "react";
import { useQuery, gql } from '@apollo/client'
import PolicyCard from "../../Components/PolicyCard/PolicyCard";
import LegalKey from "../../Components/LegalKey/LegalKey";
import fight from "./../../assets/fight.png";
import fists from "./../../assets/Asset 1.png";
import NoResults from "../../Components/NoResults/NoResults";
import SearchBar from '../../Components/SearchBar/SearchBar'
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
  let sortedData;
  let { data, loading, error } = useQuery(GET_POLICIES)
  if (loading) console.log('Loading...');
  if (error) console.log("error!", error.message)
  if (data) sortedData = [...data.states].sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
  console.log(sortedData)

  const [searchInput, setSearchInput] = useState('')
  const [legalResults, setLegalResults] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const inputRef = useRef(null)
  
  const handleSearchChange = (value) => {
    setSearchInput(value);
  };
  
  useEffect(() => {
    if (searchInput) {
      const filteredData = sortedData.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
      setFilteredResults(filteredData)
    }
  }, [searchInput, data]);
  
  const generatePolicyCards = (states) => {
    return states.length ? 
    states.map(state => {
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
    const filteredByStatus = sortedData.filter((state) => state.legal === legalSearch)
    setLegalResults(filteredByStatus)
  }

  const clearSearch = () => {
    inputRef.current.value = ''
    setLegalResults('')
    setSearchInput('')
  }

  return (
    <section className='policy-body'>
      <h1 className='policy-header'>Check state abortion status</h1>
      <div className="content-body">
        <SearchBar inputRef={inputRef} handleSearchChange={handleSearchChange}/>
        <div className='key-container'>
          <img className='policy-images' src={fight} height='200' alt='fight for your right megaphone'></img>
          <LegalKey filterByLegality={filterByLegality} clearSearch={clearSearch}/>
          <img className='policy-images' src={fists} height='200' alt='empowered fists'></img>
        </div>
          {searchInput && legalResults ? generatePolicyCards(filteredResults.filter(res => legalResults.includes(res))) :
            searchInput ? generatePolicyCards(filteredResults) : 
            legalResults ? generatePolicyCards(legalResults) :
            data ? generatePolicyCards(sortedData) : <h3>Loading...</h3>}
      </div>
    </section>
    );
};

export default StatePoliciesView;