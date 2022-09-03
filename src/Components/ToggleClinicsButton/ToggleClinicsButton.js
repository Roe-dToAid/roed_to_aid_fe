import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./ToggleClinicsButton.scss";

const ToggleClinicsButton = () => {
  const [clinics, setClinics] = useState([]);
  const [error, setError] = useState();
  const [filter, setFilter] = useState("all");

  const handleFilter = (event, filterQuery) => {
    if (filterQuery !== null) {
      setFilter(filterQuery);
    }
  };
  return (
    <div className="filter-container">
      <span className="material-symbols-outlined">filter_list</span>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}
        aria-label="text alignment"
        className="toggle-button-group"
      >
        <ToggleButton value="all" aria-label="all" className="toggle-button">
          All
        </ToggleButton>
        <ToggleButton
          value="authorized"
          aria-label="authorized"
          className="toggle-button"
        >
          Authorized
        </ToggleButton>
        <ToggleButton
          value="misinformationCenters"
          aria-label="misinformation"
          className="toggle-button"
        >
          Misinformation
        </ToggleButton>
        <ToggleButton
          value="resources"
          aria-label="resources"
          className="toggle-button"
        >
          Resources
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleClinicsButton;
