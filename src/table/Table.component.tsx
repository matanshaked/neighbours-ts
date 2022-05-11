import TableRow from "../table-row/TableRow.component";
import { Matrix } from "../dataStructure";

import "./Table.style.scss";

const Table = ({ matrix }: { matrix: Matrix }) => {
  const tableStyle = {
    width: 25 * matrix.length + "px",
  };
  return (
    <table style={tableStyle}>
      <tbody>
        {matrix.map((tableRowData, index) => (
          <TableRow key={index} tableRowData={tableRowData} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
