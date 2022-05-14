import { v4 as uuidv4 } from "uuid";

import { TableRow } from "../table-row/TableRow.component";
import { Matrix } from "../../DataStructures";

import "./Table.style.scss";

export const Table = ({ matrix }: { matrix: Matrix }): JSX.Element => {
  const tableStyle = {
    width: 25 * matrix.length + "px",
  };
  return (
    <table style={tableStyle}>
      <tbody>
        {matrix.map((tableRowData) => (
          <TableRow key={uuidv4()} tableRowData={tableRowData} />
        ))}
      </tbody>
    </table>
  );
};
