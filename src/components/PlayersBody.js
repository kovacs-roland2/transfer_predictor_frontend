import React from "react";
import { useState, useEffect } from "react";

import "./PlayersBody.css";
import PLayersFilterBar from "./Shared/PlayersFilterBar";
import RadarPlot from "./Players/RadarPlot";
import ViolinPlot from "./Players/ViolinPlot";
import ScatterPlot from "./Players/ScatterPlot";
import Similarity from "./Similarity/Similarity";

import Table from "react-bootstrap/Table";

const PlayersBody = ({ headerValue }) => {
  const [selectedTournamentPlayers, setSelectedTournamentPlayers] =
    useState("Bundesliga");
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState("Augsburg");
  const [selectedPositionPlayers, setSelectedPositionPlayers] =
    useState("Goalkeeper");
  const [selectedPlayerPlayers, setSelectedPlayerPlayers] =
    useState("T. Koubek");

  const [filteredTeams, setFilteredTeams] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const [playerResult, setPlayerResult] = useState("");

  const [radarplot, setRadarplot] = useState("");
  const [radarplotLoading, setRadarplotLoading] = useState(false);
  const [violinplot, setViolinplot] = useState("");
  const [violinplotLoading, setViolinplotLoading] = useState(false);
  const [selectedAttributesPlayers, setSelectedAttributesPlayers] =
    useState("Rating");
  const [scatterplot, setScatterplot] = useState("");
  const [scatterplotLoading, setScatterplotLoading] = useState(false);
  const [
    selectedAttributesScatter1Players,
    setSelectedAttributesScatter1Players,
  ] = useState("Goals");
  const [
    selectedAttributesScatter2Players,
    setSelectedAttributesScatter2Players,
  ] = useState("Assists");

  const [similarityplot, setSimilarityplot] = useState("");
  const [similarityplotLoading, setSimilarityplotLoading] = useState(false);
  const [similarityResult, setSimilarityResult] = useState("");
  const [similarityError, setSimilarityError] = useState(false);

  const lenTableRow = Object.keys(playerResult).length;
  const colNames = Object.keys(playerResult);

  const handleSelectTournamentPlayers = (e) => {
    setSelectedTournamentPlayers(e);
  };

  const handleSelectTeamPlayers = (e) => {
    setSelectedTeamPlayers(e);
  };

  const handleSelectPositionPlayers = (e) => {
    setSelectedPositionPlayers(e);
  };

  async function getPlayerinfo(e) {
    await fetch(
      `${process.env.REACT_APP_API_ORIGIN}/api/playerinfo/?tournament=${selectedTournamentPlayers}&team=${selectedTeamPlayers}&position=${selectedPositionPlayers}&name=${e}`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setPlayerResult(resp));
  }

  async function getRadarplot(e) {
    setRadarplotLoading(true);
    await fetch(
      `${process.env.REACT_APP_API_ORIGIN}/api/radarplot/?tournament=${selectedTournamentPlayers}&team=${selectedTeamPlayers}&position=${selectedPositionPlayers}&name=${e}`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setRadarplot(resp))
      .then((resp) => setRadarplotLoading(false));
  }

  async function getViolinplot(selectedPlayer, selectedAttribute) {
    setViolinplotLoading(true);
    await fetch(
      `${process.env.REACT_APP_API_ORIGIN}/api/violinplot/?tournament=${selectedTournamentPlayers}&team=${selectedTeamPlayers}&position=${selectedPositionPlayers}&name=${selectedPlayer}&attributum=${selectedAttribute}`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setViolinplot(resp))
      .then((resp) => setViolinplotLoading(false));
  }

  async function getScatterplot(
    selectedPlayer,
    selectedAttribute1,
    selectedAttribute2
  ) {
    setScatterplotLoading(true);
    await fetch(
      `${process.env.REACT_APP_API_ORIGIN}/api/scatterplot/?tournament=${selectedTournamentPlayers}&team=${selectedTeamPlayers}&position=${selectedPositionPlayers}&name=${selectedPlayer}&attr1=${selectedAttribute1}&attr2=${selectedAttribute2}`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setScatterplot(resp))
      .then((resp) => setScatterplotLoading(false));
  }

  const handleSelectPlayerPlayers = (e) => {
    setSelectedPlayerPlayers(e);

    getPlayerinfo(e);
    getRadarplot(e);
    getViolinplot(e, selectedAttributesPlayers);
    getScatterplot(
      e,
      selectedAttributesScatter1Players,
      selectedAttributesScatter2Players
    );
  };

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_ORIGIN}/api/tournament/?tournament=${selectedTournamentPlayers}`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setFilteredTeams(resp));
  }, [selectedTournamentPlayers]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_ORIGIN}/api/players/?tournament=${selectedTournamentPlayers}&team=${selectedTeamPlayers}&position=${selectedPositionPlayers}`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setFilteredPlayers(resp));
  }, [selectedTournamentPlayers, selectedTeamPlayers, selectedPositionPlayers]);

  const handleSelectAttributesPlayers = (e) => {
    setSelectedAttributesPlayers(e);
    getViolinplot(selectedPlayerPlayers, e);
  };

  const handleSelectAttributesScatter1Players = (e) => {
    setSelectedAttributesScatter1Players(e);
    getScatterplot(selectedPlayerPlayers, e, selectedAttributesScatter2Players);
  };

  const handleSelectAttributesScatter2Players = (e) => {
    setSelectedAttributesScatter2Players(e);
    getScatterplot(selectedPlayerPlayers, selectedAttributesScatter1Players, e);
  };

  const handleGetPlayers = () => {
    getPlayerinfo(selectedPlayerPlayers);
    getRadarplot(selectedPlayerPlayers);
  };

  const handleGetSimilarity = () => {
    setSimilarityplotLoading(true);
    setSimilarityResult("");
    setSimilarityError(false);

    fetch(
      `${process.env.REACT_APP_API_ORIGIN}/api/similarity_plot/?tournament=${selectedTournamentPlayers}&team=${selectedTeamPlayers}&position=${selectedPositionPlayers}&name=${selectedPlayerPlayers}`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setSimilarityplot(resp[0]);
        setSimilarityResult(resp[1]);
        setSimilarityplotLoading(false);
        setSimilarityError(false);
      })
      .catch((error) => {
        setSimilarityResult("");
        setSimilarityError(true);
      });
  };

  return (
    <React.Fragment>
      <PLayersFilterBar
        titleTournament={selectedTournamentPlayers}
        onSelectTournament={handleSelectTournamentPlayers}
        titleTeam={selectedTeamPlayers}
        onSelectTeam={handleSelectTeamPlayers}
        filteredTeams={filteredTeams}
        titlePosition={selectedPositionPlayers}
        onSelectPosition={handleSelectPositionPlayers}
        titlePlayer={selectedPlayerPlayers}
        onSelectPlayer={handleSelectPlayerPlayers}
        filteredPlayers={filteredPlayers}
        onGetPlayers={handleGetPlayers}
        onGetSimilarity={handleGetSimilarity}
        headerValue={headerValue}
      />
      {headerValue === "players" && (
        <div
          style={{
            marginTop: "1.5%",
            marginLeft: "3%",
            marginRight: "3%",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <Table
              className="Table Table-sm"
              style={{ flex: " 2 1 auto", marginRight: "3%" }}
            >
              <tbody>
                {Array.from({ length: lenTableRow }).map((_, indexRow) => (
                  <tr key={indexRow}>
                    <td style={{ fontWeight: "bold" }}>{colNames[indexRow]}</td>
                    <td>{Object.values(playerResult[colNames[indexRow]])}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {radarplot && (
              <RadarPlot
                radarplotLoading={radarplotLoading}
                radarplot={radarplot}
                style={{ marginLeft: "3%", flex: " 2 1 auto" }}
              />
            )}
          </div>
          <div
            style={{
              marginTop: "1.5%",
              marginLeft: "3%",
              marginRight: "3%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {violinplot && (
              <ViolinPlot
                titleAttributes={selectedAttributesPlayers}
                onSelectAttributes={handleSelectAttributesPlayers}
                violinplotLoading={violinplotLoading}
                violinplot={violinplot}
                style={{ marginRight: "6%", flex: " 2 1 auto" }}
              />
            )}
            {scatterplot && (
              <ScatterPlot
                titleAttributesScatter1={selectedAttributesScatter1Players}
                onSelectAttributesScatter1={
                  handleSelectAttributesScatter1Players
                }
                titleAttributesScatter2={selectedAttributesScatter2Players}
                onSelectAttributesScatter2={
                  handleSelectAttributesScatter2Players
                }
                scatterplotLoading={scatterplotLoading}
                scatterplot={scatterplot}
                style={{ marginLeft: "6%", flex: " 2 1 auto" }}
              />
            )}
          </div>
        </div>
      )}
      {headerValue === "similarity" &&
        similarityResult &&
        similarityError === false && (
          <Similarity
            similarityResult={similarityResult}
            similarityplotLoading={similarityplotLoading}
            similarityplot={similarityplot}
          />
        )}
      {similarityError && (
        <p style={{ color: "red", margintTop: "30%" }}>
          Sorry! Not enough information about the player...
        </p>
      )}
    </React.Fragment>
  );
};

export default PlayersBody;
