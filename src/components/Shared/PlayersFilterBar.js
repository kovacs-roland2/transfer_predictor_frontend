import Filter from "./../Players/Filter";
import FilterTeams from "./../Players/FilterTeams";
import FilterPosition from "./../Players/FilterPosition";
import FilterPlayer from "./../Players/FilterPlayer";

import Button from "react-bootstrap/Button";

const PLayersFilterBar = ({
  titleTournament,
  onSelectTournament,
  titleTeam,
  onSelectTeam,
  filteredTeams,
  titlePosition,
  onSelectPosition,
  titlePlayer,
  onSelectPlayer,
  filteredPlayers,
  onGetPlayers,
  onGetSimilarity,
  headerValue,
}) => {
  return (
    <div style={{ display: "flex", marginTop: "1.5%" }}>
      <div className="filters" style={{ display: "flex", marginLeft: "3%" }}>
        <Filter
          titleTournament={titleTournament}
          onSelectTournament={onSelectTournament}
        />
        <FilterTeams
          titleTeam={titleTeam}
          onSelectTeam={onSelectTeam}
          filteredTeams={filteredTeams}
        />
        <FilterPosition
          titlePosition={titlePosition}
          onSelectPosition={onSelectPosition}
        />
        {filteredPlayers && (
          <FilterPlayer
            titlePlayer={titlePlayer}
            onSelectPlayer={onSelectPlayer}
            filteredPlayers={filteredPlayers}
          />
        )}
      </div>
      {headerValue === "players" && (
        <Button
          type="button"
          className="btn btn-secondary"
          onClick={onGetPlayers}
          style={{
            marginLeft: "auto",
            marginRight: "3%",
            marginTop: "0.5%",
          }}
        >
          Get player
        </Button>
      )}
      {headerValue === "similarity" && (
        <Button
          type="button"
          className="btn btn-secondary"
          onClick={onGetSimilarity}
          style={{
            marginLeft: "auto",
            marginRight: "3%",
            marginTop: "0.5%",
          }}
        >
          Get similarity
        </Button>
      )}
    </div>
  );
};

export default PLayersFilterBar;
