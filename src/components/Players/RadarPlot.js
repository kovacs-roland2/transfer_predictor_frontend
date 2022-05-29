const RadarPlot = ({ radarplotLoading, radarplot }) => {
  return (
    <div>
      {!radarplotLoading && radarplot && (
        <img src={`data:image/png;base64,${radarplot}`} alt="Radar plot" />
      )}
      {radarplotLoading && <p>Loading...</p>}
    </div>
  );
};

export default RadarPlot;
