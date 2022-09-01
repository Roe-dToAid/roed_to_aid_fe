import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./ToggleClinicsButton.scss";

const ToggleClinicsButton = () => {
  const [clinics, setClinics] = useState([]);
  const [error, setError] = useState();
  const [filter, setFilter] = useState("all-clinics");

  const handleFilter = (event, filterQuery) => {
    if (filterQuery !== null) {
      setFilter(filterQuery);
    }
  };
  return (
    <div className="filter-container">
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}
        aria-label="text alignment"
        className="toggle-button-group"
      >
        <ToggleButton
          value="all-clinics"
          aria-label="all clinics"
          className="toggle-button"
        >
          All Clinics
        </ToggleButton>
        <ToggleButton
          value="authorized-only"
          aria-label="authorized only"
          className="toggle-button"
        >
          Authorized
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleClinicsButton;
