import React from "react";
import styled from "styled-components";
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
  background-color: white;
  overflow: hidden;
`;
const Thead = styled.thead`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
`;
const TrHead = styled.tr``;
const TdHead = styled.td`
  color: #707275;
  background-color: #f4f5f7;
  display: table-cell;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 19.5px;
  padding: 12px 16px;
  text-align: left;
  text-transform: uppercase;
  text-align: ${(props) => props.textAlign || "left"};
`;
const Tbody = styled.tbody``;
const Tr = styled.tr`
  border: 1px solid #ccc;
`;
const Td = styled.td`
  color: #707275;
  color: ${(props) => props.color || "#707275"};
  display: table-cell;
  font-size: 14px;
  line-height: 21px;
  padding: 12px 24px;
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: ${(props) => (props.textAlign ? 700 : 400)};
`;

const TableInvoice = () => {
  return (
    <>
      <Table>
        <Thead>
          <TrHead>
            <TdHead textAlign="center">#</TdHead>
            <TdHead>PRODUCT NAME</TdHead>
            <TdHead textAlign="center">QUANTITY</TdHead>
            <TdHead textAlign="center">ITEM PRICE</TdHead>
            <TdHead textAlign="center">AMOUNT</TdHead>
          </TrHead>
        </Thead>
        <Tbody>
          <Tr>
            <Td textAlign="center">1</Td>
            <Td>Wild King Salmon Steak</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">$12.00</Td>
            <Td textAlign="center" color="red">
              $12.00
            </Td>
          </Tr>
          <Tr>
            <Td textAlign="center">1</Td>
            <Td>Wild King Salmon Steak</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">$12.00</Td>
            <Td textAlign="center" color="red">
              $12.00
            </Td>
          </Tr>
          <Tr>
            <Td textAlign="center">1</Td>
            <Td>Wild King Salmon Steak</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">$12.00</Td>
            <Td textAlign="center" color="red">
              $12.00
            </Td>
          </Tr>
          <Tr>
            <Td textAlign="center">1</Td>
            <Td>Wild King Salmon Steak</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">$12.00</Td>
            <Td textAlign="center" color="red">
              $12.00
            </Td>
          </Tr>
          <Tr>
            <Td textAlign="center">1</Td>
            <Td>Wild King Salmon Steak</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">$12.00</Td>
            <Td textAlign="center" color="red">
              $12.00
            </Td>
          </Tr>
          <Tr>
            <Td textAlign="center">1</Td>
            <Td>Wild King Salmon Steak</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">$12.00</Td>
            <Td textAlign="center" color="red">
              $12.00
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};

export default TableInvoice;
