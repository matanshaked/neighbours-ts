import { v4 as uuidv4 } from "uuid";

import { TableData } from "../table-data/TableData.component";

export const TableRow = ({
  tableRowData,
}: {
  tableRowData: number[];
}): JSX.Element => (
  <tr>
    {tableRowData.map((tableData) => (
      <TableData key={uuidv4()} tableData={tableData} />
    ))}
  </tr>
);
