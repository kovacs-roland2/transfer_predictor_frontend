import { useState, useEffect } from "react";

import "./HomeBody.css";
import FilterTournament from "./Overview/FilterTournament";
import HomeBodyNavbar from "./Overview/Navbar";
import HomeTable from "./Overview/HomeTable";

const HomeBody = () => {
  const [selectedTournament, setSelectedTournament] = useState("Top 5");
  const [tableFilter, setTableFilter] = useState("standard");
  const [result, setResult] = useState("");
  const [loadingResult, setLoadingResult] = useState(false);
  const [error, setError] = useState(false);

  const handleSelectTournament = (e) => {
    setSelectedTournament(e);
  };

  const handleFilter = (e) => {
    setTableFilter(e.target.dataset.filter);
  };

  useEffect(() => {
    setLoadingResult(true);
    fetch(
      `http://127.0.0.1:8000/api/overview/?tournament=${selectedTournament}&position=${tableFilter}`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setResult(resp))
      .then((resp) => setLoadingResult(false))
      .catch((err) => setError(true));
  }, [selectedTournament, tableFilter]);

  return (
    <>
      <FilterTournament
        title={selectedTournament}
        onSelect={handleSelectTournament}
      />
      {result && !error && !loadingResult && (
        <div className="HomeTable">
          <HomeBodyNavbar onClick={handleFilter} />
          <HomeTable tableValues={result} />
        </div>
      )}
      {loadingResult && <p>Loading...</p>}
      {error && <h4 style={{ color: "red" }}>Something went wrong...</h4>}
    </>
  );
};

export default HomeBody;
