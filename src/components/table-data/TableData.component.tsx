import "./TableData.style.scss";

export const TableData = ({
  tableData,
}: {
  tableData: number;
}): JSX.Element => {
  const classTableData = tableData ? "dark-mode" : "light-mode";
  return <td className={classTableData}>{tableData}</td>;
};
