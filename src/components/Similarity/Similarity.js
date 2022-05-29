import SimilarityPlot from "./SimilarityPlot";

import Table from "react-bootstrap/Table";

const Similarity = ({
  similarityResult,
  similarityplotLoading,
  similarityplot,
}) => {
  const simKeys = Object.keys(similarityResult[0]);
  const rowNum = similarityResult.length;

  return similarityResult ? (
    <div
      style={{
        display: "flex",
        marginLeft: "3%",
        marginTop: "1.5%",
        marginRight: "3%",
      }}
    >
      <Table
        className="Table Table-sm"
        style={{ flex: " 2 1 auto", marginRight: "3%" }}
      >
        <thead>
          <tr>
            <th>#</th>
            {simKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowNum }).map((_, indexRow) => (
            <tr key={indexRow}>
              <td>{indexRow + 1}</td>
              {Array.from(simKeys).map((colName) => (
                <td key={colName}>{similarityResult[indexRow][colName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <SimilarityPlot
        similarityplotLoading={similarityplotLoading}
        similarityplot={similarityplot}
        style={{ marginLeft: "3%", flex: " 2 1 auto" }}
      />
    </div>
  ) : (
    <p>Something went wrong</p>
  );
};

export default Similarity;
