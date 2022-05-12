import TableData from "../table-data/TableData.component";

const TableRow = ({ tableRowData }: { tableRowData: number[] }) => (
  <tr>
    {tableRowData.map((tableData, index) => (
      <TableData key={index} tableData={tableData} />
    ))}
  </tr>
);

export default TableRow;
