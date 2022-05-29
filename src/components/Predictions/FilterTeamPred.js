import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const FilterTeamsPred = ({
  titleTeamPred,
  onSelectTeamPred,
  filteredTeamsPred,
}) => {
  return (
    <React.Fragment>
      <DropdownButton
        drop="end"
        variant="secondary"
        title={titleTeamPred}
        onSelect={onSelectTeamPred}
        className="DropdownButton"
      >
        {Array.from(filteredTeamsPred).map((team) => (
          <Dropdown.Item key={team} eventKey={team}>
            {team}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </React.Fragment>
  );
};

export default FilterTeamsPred;
