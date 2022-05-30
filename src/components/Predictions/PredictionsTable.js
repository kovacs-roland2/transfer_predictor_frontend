import { useState } from "react";

import Table from "react-bootstrap/Table";
import ReactTooltip from "react-tooltip";

const PredictionsTable = ({
  predictionResult,
  metricResult,
  featureResult,
}) => {
  const predKeys = Object.keys(predictionResult[0]);
  const predColNums = predKeys.length;
  const predRowNums = predictionResult.length;

  const metricKeys = Object.keys(metricResult[0]);
  const metricRowNum = metricKeys.length;

  const featureKeys = Object.keys(featureResult[0]);
  const featureRowNum = featureResult.length;

  const [tooltip, showTooltip] = useState(true);

  return (
    <div style={{ display: "flex", marginTop: "1.5%" }}>
      <Table style={{ flex: "3 1 auto", marginLeft: "3%" }}>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: predColNums }).map((_, index) => (
              <th key={index}>{predKeys[index]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: predRowNums }).map((_, indexRow) => (
            <tr key={indexRow}>
              <td>{indexRow + 1}</td>
              {predKeys.map((key) => (
                <td key={key}>{predictionResult[indexRow][key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ flex: "1 1 auto", marginRight: "3%", marginLeft: "100px" }}>
        <Table className="Table Table-sm">
          <thead style={{ fontWeight: "bold" }}>
            <tr>
              <td>Metrics</td>
              <td>Values</td>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: metricRowNum }).map((_, indexRow) => (
              <tr key={indexRow}>
                <td>{metricKeys[indexRow]}</td>
                <td>{metricResult[0][metricKeys[indexRow]]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Table className="Table Table-sm">
          <thead style={{ fontWeight: "bold" }}>
            <tr>
              <td>Features</td>
              <td>Importances</td>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: featureRowNum }).map((_, indexRow) => (
              <tr key={indexRow}>
                <td
                  data-tip={featureResult[indexRow][featureKeys[2]]}
                  onMouseEnter={() => showTooltip(true)}
                  onMouseLeave={() => {
                    showTooltip(false);
                    setTimeout(() => showTooltip(true), 50);
                  }}
                >
                  {featureResult[indexRow][featureKeys[0]]}
                </td>
                <td>{featureResult[indexRow][featureKeys[1]]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {tooltip && <ReactTooltip effect="solid" />}
      </div>
    </div>
  );
};

export default PredictionsTable;
