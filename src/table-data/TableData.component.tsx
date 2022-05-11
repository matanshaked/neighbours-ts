import "./TableData.style.scss";

const TableData = ({ tableData }: { tableData: number }) => {
  const classTableData = tableData ? "black-background" : "white-background";
  return <td className={classTableData}>{tableData}</td>;
};

export default TableData;
