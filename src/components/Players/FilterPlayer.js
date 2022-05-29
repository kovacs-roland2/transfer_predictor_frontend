import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const FilterPlayers = ({ titlePlayer, onSelectPlayer, filteredPlayers }) => {
  return (
    <React.Fragment>
      <DropdownButton
        drop="end"
        variant="secondary"
        title={titlePlayer}
        onSelect={onSelectPlayer}
        className="DropdownButton"
      >
        {/* {Array.from(filteredPlayers).map((player) => (
          <Dropdown.Item eventKey={player}>{player}</Dropdown.Item>
        ))} */}
        {Array.from(filteredPlayers).map((players) => (
          <Dropdown.Item key={players} eventKey={players}>
            {players}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </React.Fragment>
  );
};

export default FilterPlayers;
