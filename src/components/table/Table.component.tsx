import { TableRow } from "../table-row/TableRow.component";
import { Matrix } from "../../DataStructures";

import "./Table.style.scss";

interface Props {
  matrix: Matrix;
  testid?: string;
}

export const Table = (props: Props): JSX.Element => {
  const tableStyle = {
    width: 25 * props.matrix.length + "px",
  };
  return (
    <table style={tableStyle}>
      <tbody data-testid={props.testid}>
        {props.matrix.map((tableRowData, index) => (
          <TableRow key={index} tableRowData={tableRowData} />
        ))}
      </tbody>
    </table>
  );
};
