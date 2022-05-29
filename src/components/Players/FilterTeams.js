import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const FilterTeams = ({ titleTeam, onSelectTeam, filteredTeams }) => {
  return (
    <React.Fragment>
      <DropdownButton
        drop="end"
        variant="secondary"
        title={titleTeam}
        onSelect={onSelectTeam}
        className="DropdownButton"
      >
        {Array.from(filteredTeams).map((team) => (
          <Dropdown.Item key={team} eventKey={team}>
            {team}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </React.Fragment>
  );
};

export default FilterTeams;
