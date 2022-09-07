import React, { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./ToggleClinicsButton.scss";

const ToggleClinicsButton = ({ setToggleSelected }) => {
  const [filter, setFilter] = useState("all");

  const handleFilter = (event, filterQuery) => {
    if (filterQuery !== null) {
      setFilter(filterQuery);
    }
  };

  useEffect(() => {
    setToggleSelected(filter);
  }, [filter, setToggleSelected]);

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
        <ToggleButton value="all" aria-label="all" className="toggle-button" data-cy="all">
          All
        </ToggleButton>
        <ToggleButton
          value="authorized"
          aria-label="authorized"
          className="toggle-button"
          data-cy="authorized"
        >
          Authorized
        </ToggleButton>
        <ToggleButton
          value="resources"
          aria-label="resources"
          className="toggle-button"
          data-cy="resources"
        >
          Resources
        </ToggleButton>
        <ToggleButton
          value="misinformationCenters"
          aria-label="misinformation"
          className="toggle-button"
          data-cy="misinformation"
        >
          Misinformation
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleClinicsButton;
