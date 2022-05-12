import { TableData } from "../table-data/TableData.component";

export const TableRow = ({
  tableRowData,
}: {
  tableRowData: number[];
}): JSX.Element => (
  <tr>
    {tableRowData.map((tableData, index) => (
      <TableData key={index} tableData={tableData} />
    ))}
  </tr>
);
