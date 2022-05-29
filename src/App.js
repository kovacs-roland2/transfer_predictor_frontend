import "./App.css";
import { useState } from "react";

import Header from "./components/Header";

import HomeBody from "./components/HomeBody";
import PlayersBody from "./components/PlayersBody";
import PredictionsBody from "./components/PredictionsBody";

function App() {
  const [headerValue, setHeaderValue] = useState("overview");

  const handleHeader = (e) => {
    setHeaderValue(e.target.dataset.filter);
  };

  return (
    <div className="App">
      <Header onClick={handleHeader} />
      {headerValue === "overview" && <HomeBody />}
      {(headerValue === "players" || headerValue === "similarity") && (
        <PlayersBody headerValue={headerValue} />
      )}
      {headerValue === "predictions" && <PredictionsBody />}
    </div>
  );
}

export default App;
