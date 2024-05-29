/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component";
import { useTheme } from "../../hooks/useTheme";

function Table({ tableHeaders, tableDetails }) {
  const { theme } = useTheme();
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: theme === "light" ? "white" : "#1e293b",
        color: theme === "light" ? "black" : "white",
      },
    },
    rows: {
      style: {
        backgroundColor: theme === "light" ? "white" : "#1e293b",
        color: theme === "light" ? "black" : "white",
      },
    },
    pagination: {
      style: {
        backgroundColor: theme === "light" ? "white" : "#1e293b",
        color: theme === "light" ? "black" : "white",
      },
    },
    cell: {
      style: {
        // backgroundColor: "red",
      },
    },
  };
  return (
    <DataTable
      columns={tableHeaders}
      data={tableDetails}
      selectableRows
      pagination
      customStyles={customStyles}
    />
  );
}

export default Table;
