import FilterPred from "./FilterPred";
import FilterTeamPred from "./FilterTeamPred";
import FilterPositionPred from "./FilterPositionPred";

import Button from "react-bootstrap/Button";

const PredictionsFilterBar = ({
  titleTournamentPred,
  onSelectTournamentPred,
  titleTeamPred,
  onSelectTeamPred,
  filteredTeamsPred,
  titlePositionPred,
  onSelectPositionPred,
  onGetPred,
}) => {
  return (
    <div style={{ display: "flex", marginTop: "1.5%" }}>
      <div className="filters" style={{ display: "flex", marginLeft: "3%" }}>
        <FilterPred
          titleTournamentPred={titleTournamentPred}
          onSelectTournamentPred={onSelectTournamentPred}
        />
        {/* <FilterTeamPred
          titleTeamPred={titleTeamPred}
          onSelectTeamPred={onSelectTeamPred}
          filteredTeamsPred={filteredTeamsPred}
        /> */}
        <FilterPositionPred
          titlePositionPred={titlePositionPred}
          onSelectPositionPred={onSelectPositionPred}
        />
      </div>
      <Button
        type="button"
        className="btn btn-secondary"
        onClick={onGetPred}
        style={{
          marginLeft: "auto",
          marginRight: "3%",
          marginTop: "0.5%",
        }}
      >
        Get predictions
      </Button>
    </div>
  );
};

export default PredictionsFilterBar;
