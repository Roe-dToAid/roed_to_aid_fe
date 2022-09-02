import React, { useEffect, useState, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import "./ClinicsView.scss";
import ClinicKeyBlock from "../../Components/ClinicKeyBlock/ClinicKeyBlock";
import ToggleClinicsButton from "../../Components/ToggleClinicsButton/ToggleClinicsButton";
import StateSelector from "../../Components/StateSelector/StateSelector";
import SearchBar from "../StatePoliciesView/SearchBar/SearchBar";

const GET_CLINICS = gql`
  query {
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
  if (loading) console.log("Loading...");
  if (error) console.log("error!", error.message);
  if (data) console.log(data);

  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef(null);

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  useEffect(() => {
    if (searchInput) {
      const filteredData = data.states.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredResults(filteredData);
    }
  }, [searchInput, data]);

  const clearSearch = () => {
    inputRef.current.value = "";;
    setSearchInput("");
  };

  return (
    <>
      <h1>Find a safe clinic</h1>
      <div className="heading-container">
        <div>
          <SearchBar
            inputRef={inputRef}
            handleSearchChange={handleSearchChange}
          />
          <ToggleClinicsButton />
        </div>
        <ClinicKeyBlock />
      </div>
    </>
  );
};

export default ClinicsView;
