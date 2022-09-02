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
      <p>Filter:</p>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}
        aria-label="text alignment"
        className="toggle-button-group"
      >
        <ToggleButton
          value="authorized"
          aria-label="authorized only"
          className="toggle-button"
        >
          Authorized
        </ToggleButton>
        <ToggleButton
          value="misinformation"
          aria-label="misinformation only"
          className="toggle-button"
        >
          Misinformation
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleClinicsButton;
