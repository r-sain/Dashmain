import React, { useEffect, useState } from "react";
import { gridData } from "../dummyGrid";
import DataTable from "react-data-table-component";
import "./grid.css";
const Grid = (data) => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "50px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "15px", // override the cell padding for head cells
        paddingRight: "15px",
        backgroundColor: "#bfc0e1",
      },
    },
    cells: {
      style: {
        paddingLeft: "10px", // override the cell padding for data cells
        paddingRight: "10px",
      },
    },
  };

  const columns = [
    {
      name: "Invoice ID",
      selector: (row) => row.invoiceID,
    },
    {
      name: "Income",
      selector: (row) => row.income,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  return (
    <div className="gridTable">
      <DataTable
        columns={columns}
        data={gridData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="200px"
        highlightOnHover
        customStyles={customStyles}
      />
    </div>
  );
};

export default Grid;
