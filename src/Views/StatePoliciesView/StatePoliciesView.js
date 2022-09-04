import React, { useEffect, useState, useRef } from "react";
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
      abbreviation
    }
  }
`;

const StatePoliciesView = () => {
  const [states, setStates] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [legalResults, setLegalResults] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const inputRef = useRef(null);

  let { data, loading, error } = useQuery(GET_POLICIES);
  if (loading) console.log("Loading...");
  // if (error) setErr(error.message)
  if (error) console.log("error!", error.message);
  // if (data) console.log(data);


  useEffect(() => {
    if (!error && !loading) {
      setStates(data.states)
    } 
  }, [data])

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  useEffect(() => {
    if (searchInput) {
      const filteredData = states.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredResults(filteredData);
    }
  }, [searchInput, data]);

  const generatePolicyCards = (states) => {
    return states.length ? (
      states.map((state) => {
        return (
          <PolicyCard
            key={state.abbreviation}
            name={state.name}
            legal={state.legal}
            legalDescription={state.legalDescription}
          />
        );
      })
    ) : (
      <NoResults />
    );
  };

  const filterByLegality = (legalSearch) => {
    const filteredByStatus = states.filter(
      (state) => state.legal === legalSearch
    );
    setLegalResults(filteredByStatus);
  };

  const clearSearch = () => {
    inputRef.current.value = "";
    setLegalResults("");
    setSearchInput("");
  };

  return (
    <section className="policy-body">
      <h1 className="policy-header" data-cy="policy-header" tabIndex='0'>Check state abortion status</h1>
      <div className="content-body">
        <div className="key-container">
          <img
            className="policy-img"
            src={fight}
            alt="fight for your right megaphone"
            data-cy="fight-img"
            tabIndex='0'
          ></img>
          <div>
            <LegalKey
              filterByLegality={filterByLegality}
              clearSearch={clearSearch}
            />
            <SearchBar
              inputRef={inputRef}
              handleSearchChange={handleSearchChange}
            />
          </div>
          <img
            className="policy-img"
            src={fists}
            alt="empowered fists"
            data-cy="fists-img"
            tabIndex='0'
          ></img>
        </div>
        {error ? <p>error</p> :
          searchInput && legalResults ? (
            generatePolicyCards(
              filteredResults.filter((res) => legalResults.includes(res))
            )
          ) : searchInput ? (
            generatePolicyCards(filteredResults)
          ) : legalResults ? (
            generatePolicyCards(legalResults)
          ) : states ? (
            generatePolicyCards(states)
          ) : (
            <h3>Loading...</h3>
          )}
      </div>
    </section>
  );
};

export default StatePoliciesView;
