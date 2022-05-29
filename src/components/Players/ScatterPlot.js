import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const attributes = [
  "Accurate crosses",
  "Accurate long passes",
  "Accurate through balls",
  "Aerials lost",
  "Aerials won",
  "Aerias total",
  "Assists",
  "Blocks",
  "Challenges lost",
  "Clearances",
  "Dispossessed",
  "Dribbled",
  "Dribbles lost",
  "Dribbles total",
  "Dribbles won",
  "Fouls",
  "Fouls given",
  "Goal (outside of the box)",
  "Goal (penalty area)",
  "Goal (six yard box)",
  "Goal open play",
  "Goals",
  "Goals head",
  "Goals set piece",
  "Interceptions",
  "Keypasses",
  "Offsides given",
  "Offsides won",
  "Pass success rate",
  "Passes",
  "Rating",
  "Saves (out of the box)",
  "Saves (penalty area)",
  "Saves (six yard box)",
  "Saves total",
  "Shots",
  "Shots (outside of the box)",
  "Shots (penalty area)",
  "Shots (six yard box)",
  "Shots blocked",
  "Shots header",
  "Shots off target",
  "Shots on post",
  "Shots on target",
  "Shots open play",
  "Shots set piece",
  "Shots total",
  "Tackles",
  "Turnovers",
];

const ScatterPlot = ({
  titleAttributesScatter1,
  titleAttributesScatter2,
  onSelectAttributesScatter1,
  onSelectAttributesScatter2,
  scatterplotLoading,
  scatterplot,
}) => {
  return (
    <div style={{ marginRight: "6%" }}>
      <div style={{ display: "flex" }}>
        <DropdownButton
          drop="end"
          variant="secondary"
          title={titleAttributesScatter1}
          onSelect={onSelectAttributesScatter1}
          className="DropdownButton"
        >
          {Array.from(attributes).map((attr) => (
            <Dropdown.Item key={attr} eventKey={attr}>
              {attr}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton
          drop="end"
          variant="secondary"
          title={titleAttributesScatter2}
          onSelect={onSelectAttributesScatter2}
          className="DropdownButton"
        >
          {Array.from(attributes).map((attr) => (
            <Dropdown.Item key={attr} eventKey={attr}>
              {attr}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>

      {!scatterplotLoading && scatterplot && (
        <img src={`data:image/png;base64,${scatterplot}`} alt="Scatter plot" />
      )}
      {scatterplotLoading && <p>Loading...</p>}
    </div>
  );
};

export default ScatterPlot;
