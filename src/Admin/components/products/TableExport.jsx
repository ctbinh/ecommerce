import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  getProducts,
  productsSelector,
} from "../../store/reducers/productsSlice";
import { Table } from "./Table";
const Styles = styled.div`
  padding: 1rem;
  /* width: 100%; */
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #b2b2b2;
  margin: 4px 10px;
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

// function Table({ columns, data }) {
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable(
//       {
//         columns,
//         data,
//       },
//       useSortBy
//     );

//   const firstPageRows = rows.slice(0, rows.length);

//   return (
//     <>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 // Add the sorting props to control sorting. For this example
//                 // we can add them into the header props
//                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                   {column.render("Header")}
//                   {/* Add a sort direction indicator */}
//                   <span>
//                     {column.isSorted
//                       ? column.isSortedDesc
//                         ? " 🔽"
//                         : " 🔼"
//                       : ""}
//                   </span>
//                 </th>
//               ))}
//               <th>Action</th>
//               <th>Action</th>
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {firstPageRows.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//                 <td>
//                   <Link to={`detail?id=${row.cells[2].value}`}>Detail</Link>
//                 </td>
//                 <td>Remove</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <br />
//       {/* <div>Showing the first 20 results of {rows.length} rows</div> */}
//     </>
//   );
// }

const TableExport = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "Full Name",
            accessor: "name",
          },
          {
            Header: "Brand Name",
            accessor: "brand",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "ID",
            accessor: "product_id",
          },
          {
            Header: "CPU",
            accessor: "cpu",
          },
          {
            Header: "Ram",
            accessor: "ram",
          },
          {
            Header: "Price",
            accessor: "price",
          },
        ],
      },
    ],
    []
  );

  const products = useSelector(productsSelector);
  console.log("???", products);
  const dispatch = useDispatch();
  useEffect(() => {
    // send request to jsonplaceholder
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Styles>
      <Table columns={columns} data={products} />
    </Styles>
  );
};

export default TableExport;
