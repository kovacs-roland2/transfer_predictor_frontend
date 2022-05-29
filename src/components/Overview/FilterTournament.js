import "./FilterTournament.css";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const FilterTournament = ({ title, onSelect }) => {
  return (
    <DropdownButton
      drop="end"
      variant="secondary"
      title={title}
      onSelect={onSelect}
      className="DropdownButton"
    >
      <Dropdown.Item eventKey="Top 5">Top 5</Dropdown.Item>
      <Dropdown.Item eventKey="Bundesliga">Bundesliga</Dropdown.Item>
      <Dropdown.Item eventKey="LaLiga">LaLiga</Dropdown.Item>
      <Dropdown.Item eventKey="Ligue 1">Ligue 1</Dropdown.Item>
      <Dropdown.Item eventKey="Premier League">Premier League</Dropdown.Item>
      <Dropdown.Item eventKey="Serie A">Serie A</Dropdown.Item>
    </DropdownButton>
  );
};

export default FilterTournament;
