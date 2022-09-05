import React, { useEffect, useState, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import "./ClinicsView.scss";
import ClinicKeyBlock from "../../Components/ClinicKeyBlock/ClinicKeyBlock";
import ToggleClinicsButton from "../../Components/ToggleClinicsButton/ToggleClinicsButton";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ClinicCardContainer from "../../Components/ClinicCardContainer/ClinicCardContainer";
import Loading from "../../Components/Loading/Loading";

const GET_CLINICS = gql`
  query GetClinics {
    states {
      name
      id
      abbreviation
      resources {
        id
        stateId
        name
        website
        service
        active
        bipocFocus
      }
      misinformationCenters {
        id
        stateId
        name
        address
        source
        city
        zip
      }
      authorizedClinics {
        id
        stateId
        name
        city
        zip
        phone
        services
        website
        address
        source
      }
    }
  }
`;

const ClinicsView = () => {
  let { data, loading, error } = useQuery(GET_CLINICS);
  if (loading) console.log("Loading...") && <Loading/>;
  if (error) console.log("error!", error.message);

  const [states, setStates] = useState([]);
  const [toggleSelected, setToggleSelected] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      setStates(data.states);
    }
  }, [loading, data]);

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  useEffect(() => {
    if (searchInput) {
      const filteredData = states.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([])
    }
  }, [searchInput, states]);

  return (
    <main className="clinics-view-container">
      <h1 data-cy="clinics-view-heading">Find a safe clinic</h1>
      <div className="heading-container">
        <ClinicKeyBlock />
        <div>
          <SearchBar
            inputRef={inputRef}
            handleSearchChange={handleSearchChange}
          />
          <ToggleClinicsButton setToggleSelected={setToggleSelected}/>
        </div>
      </div>
      {!loading ? <ClinicCardContainer states={states} toggleSelected={toggleSelected} filteredResults={filteredResults}/> : <Loading /> }
    </main>
  );
};

export default ClinicsView;
