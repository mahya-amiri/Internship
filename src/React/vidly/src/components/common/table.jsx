import React from "react";
import TableBody from "./tableBody";
import TableHearder from "./tableHeader";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHearder
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      ></TableHearder>
      <TableBody columns={columns} data={data}></TableBody>
    </table>
  );
};

export default Table;
