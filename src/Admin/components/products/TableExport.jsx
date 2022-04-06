import React, { useMemo } from "react";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import { Link } from "react-router-dom";

import makeData from "./makeData";

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

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
              <th>Action</th>
              <th>Action</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {console.log("vcc", row)}
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td>
                  <Link to={`detail?id=${row.cells[2].value}`}>Detail</Link>
                </td>
                <td>Remove</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </>
  );
}

const TableExport = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "Full Name",
            accessor: "firstName",
          },
          {
            Header: "Brand Name",
            accessor: "brandName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "ID",
            accessor: "id",
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

  const data = useMemo(() => {
    return [
      {
        firstName:
          "MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop",
        brandName: "Dell",
        id: "abcsxex",
        cpu: "Intel Core i7-11800H",
        price: 28990000,
        ram: "1 x 8GB DDR4 3200MHz",
      },
      {
        firstName:
          "MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop",
        brandName: "Dell",
        id: "abcsxex",
        cpu: "Intel Core i7-11800H",
        price: 28990000,
        ram: "1 x 8GB DDR4 3200MHz",
      },
      {
        firstName:
          "MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop",
        brandName: "Dell",
        id: "abcsxex",
        cpu: "Intel Core i7-11800H",
        price: 28990000,
        ram: "1 x 8GB DDR4 3200MHz",
      },
      {
        firstName:
          "MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop",
        brandName: "Dell",
        id: "abcsxex",
        cpu: "Intel Core i7-11800H",
        price: 28990000,
        ram: "1 x 8GB DDR4 3200MHz",
      },
      {
        firstName:
          "MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop",
        brandName: "Dell",
        id: "abcsxex",
        cpu: "Intel Core i7-11800H",
        price: 28990000,
        ram: "1 x 8GB DDR4 3200MHz",
      },
    ];
  }, []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
};

export default TableExport;
