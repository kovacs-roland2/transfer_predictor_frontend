import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Filter = ({ titleTournament, onSelectTournament }) => {
  return (
    <React.Fragment>
      <DropdownButton
        drop="end"
        variant="secondary"
        title={titleTournament}
        onSelect={onSelectTournament}
        className="DropdownButton"
      >
        <Dropdown.Item eventKey="Bundesliga">Bundesliga</Dropdown.Item>
        <Dropdown.Item eventKey="LaLiga">LaLiga</Dropdown.Item>
        <Dropdown.Item eventKey="Ligue 1">Ligue 1</Dropdown.Item>
        <Dropdown.Item eventKey="Premier League">Premier League</Dropdown.Item>
        <Dropdown.Item eventKey="Serie A">Serie A</Dropdown.Item>
      </DropdownButton>
    </React.Fragment>
  );
};

export default Filter;
