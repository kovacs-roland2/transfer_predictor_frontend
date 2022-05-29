import React from "react";
import { useState, useEffect } from "react";

import "./PlayersBody.css";
import PredictionsFilterBar from "./Predictions/PredictionsFilterBar";
import PredictionsTable from "./Predictions/PredictionsTable";

const PredictionsBody = () => {
  const [selectedTournamentPredictions, setSelectedTournamentPredictions] =
    useState("Bundesliga");
  const handleSelectTournamentPredictions = (e) => {
    setSelectedTournamentPredictions(e);
  };

  const [selectedTeamPredictions, setSelectedTeamPredictions] =
    useState("Augsburg");
  const handleSelectTeamPredictions = (e) => {
    setSelectedTeamPredictions(e);
  };

  const [selectedPositionPredictions, setSelectedPositionPredictions] =
    useState("Goalkeeper");
  const handleSelectPositionPredictions = (e) => {
    setSelectedPositionPredictions(e);
  };

  const [metricResult, setMetricResult] = useState("");
  const [featureResult, setFeatureResult] = useState("");
  const [predictionResult, setPredictionResult] = useState("a");
  const handleGetPredicitions = () => {
    fetch(
      `${process.env.REACT_APP_API_ORIGIN}/api/predictions/?tournament=${selectedTournamentPredictions}&team=${selectedTeamPredictions}&position=${selectedPositionPredictions}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setMetricResult(resp[0]);
        setFeatureResult(resp[1]);
        setPredictionResult(resp[2]);
      });
  };

  const [filteredTeamsPred, setFilteredTeamsPred] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_ORIGIN}/api/tournament/?tournament=${selectedTournamentPredictions}`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setFilteredTeamsPred(resp));
  }, [selectedTournamentPredictions]);

  return (
    <React.Fragment>
      <PredictionsFilterBar
        titleTournamentPred={selectedTournamentPredictions}
        onSelectTournamentPred={handleSelectTournamentPredictions}
        titleTeamPred={selectedTeamPredictions}
        onSelectTeamPred={handleSelectTeamPredictions}
        filteredTeamsPred={filteredTeamsPred}
        titlePositionPred={selectedPositionPredictions}
        onSelectPositionPred={handleSelectPositionPredictions}
        onGetPred={handleGetPredicitions}
      />
      {metricResult && featureResult && predictionResult && (
        <PredictionsTable
          predictionResult={predictionResult}
          metricResult={metricResult}
          featureResult={featureResult}
        />
      )}
    </React.Fragment>
  );
};

export default PredictionsBody;
