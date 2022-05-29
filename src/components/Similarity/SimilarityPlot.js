const SimilarityPlot = ({ similarityplotLoading, similarityplot }) => {
  return (
    <div>
      {!similarityplotLoading && similarityplot && (
        <img
          src={`data:image/png;base64,${similarityplot}`}
          alt="Similarity plot"
        />
      )}
    </div>
  );
};

export default SimilarityPlot;
