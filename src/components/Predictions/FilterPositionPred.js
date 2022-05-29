import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const FilterPositionPred = ({ titlePositionPred, onSelectPositionPred }) => {
  return (
    <React.Fragment>
      <DropdownButton
        drop="end"
        variant="secondary"
        title={titlePositionPred}
        onSelect={onSelectPositionPred}
        className="DropdownButton"
      >
        <Dropdown.Item eventKey="Goalkeeper">Goalkeeper</Dropdown.Item>
        <Dropdown.Item eventKey="Defender">Defender</Dropdown.Item>
        <Dropdown.Item eventKey="Midfielder">Midfielder</Dropdown.Item>
        <Dropdown.Item eventKey="Forward">Attacker</Dropdown.Item>
      </DropdownButton>
    </React.Fragment>
  );
};

export default FilterPositionPred;
