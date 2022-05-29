import Table from "react-bootstrap/Table";

const HomeTable = ({ tableValues }) => {
  const lenTableRow = Object.values(tableValues.Name).length;
  const lenTableCol = Object.keys(tableValues).length;
  const colNames = Object.keys(tableValues);

  return (
    <Table responsive>
      <thead>
        <tr>
          {Array.from({ length: lenTableCol }).map((_, index) => (
            <th key={index} style={{ verticalAlign: "middle" }}>
              {Object.keys(tableValues)[index]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: lenTableRow }).map((_, indexRow) => (
          <tr key={indexRow}>
            {Array.from(colNames).map((colName) => (
              <td key={colName}>
                {Object.values(tableValues[colName])[indexRow]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default HomeTable;
