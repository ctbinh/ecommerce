import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
// import { GrFormView } from "react-icons/gr";
const Wraper = styled.div`
  background-color: #f3f3f9;
  height: 85vh;
  overflow: auto;
  width: 100%;
`;
const TableWraper = styled.div`
  /* width: 90%; */
  margin: 25px 8px;
  box-shadow: 0px 0px 6px #b2b2b2;
  background-color: white;
  border-radius: 5px;
  padding: 4px 14px;
  color: #3c4858;
`;
const Td = styled.td`
  text-align: center;
`;
const IconWraper = styled.div`
  display: inline-block;
  margin: 0 4px;
  color: ${(props) => (props.color ? props.color : "inherit")};
  cursor: pointer;
  font-size: 18px;
`;
const Orders = () => {
  const navigate = useNavigate();
  return (
    <Wraper>
      <TableWraper>
        <h3>Customer List</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>OrderID</th>
              <th>UserName</th>
              <th>SĐT</th>
              <th>State</th>
              <th>Total(vnđ)</th>
              <th>Action</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>20/1/2001</td>
              <td>abas5das66x</td>
              <td>Nguyễn Đình An</td>
              <td>0123456789</td>
              <td>Đang giao</td>
              <td>115000</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>

              <Td onClick={() => navigate(`../invoice?id=xxx`)}>
                <IconWraper>
                  <AiFillEye />
                </IconWraper>
              </Td>
            </tr>
            <tr>
              <td>1</td>
              <td>20/1/2001</td>
              <td>abas5das66x</td>
              <td>Nguyễn Đình An</td>
              <td>0123456789</td>
              <td>Đang giao</td>
              <td>115000</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>

              <Td onClick={() => navigate(`../invoice?id=xxx`)}>
                <IconWraper>
                  <AiFillEye />
                </IconWraper>
              </Td>
            </tr>
            <tr>
              <td>1</td>
              <td>20/1/2001</td>
              <td>abas5das66x</td>
              <td>Nguyễn Đình An</td>
              <td>0123456789</td>
              <td>Đang giao</td>
              <td>115000</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
              <Td onClick={() => navigate(`../invoice?id=xxx`)}>
                <IconWraper>
                  <AiFillEye />
                </IconWraper>
              </Td>
            </tr>
            <tr>
              <td>1</td>
              <td>20/1/2001</td>
              <td>abas5das66x</td>
              <td>Nguyễn Đình An</td>
              <td>0123456789</td>
              <td>Đang giao</td>
              <td>115000</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
              <Td onClick={() => navigate(`../invoice?id=xxx`)}>
                <IconWraper>
                  <AiFillEye />
                </IconWraper>
              </Td>
            </tr>
            <tr>
              <td>1</td>
              <td>20/1/2001</td>
              <td>abas5das66x</td>
              <td>Nguyễn Đình An</td>
              <td>0123456789</td>
              <td>Đang giao</td>
              <td>115000</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
              <Td onClick={() => navigate(`../invoice?id=xxx`)}>
                <IconWraper>
                  <AiFillEye />
                </IconWraper>
              </Td>
            </tr>
            <tr>
              <td>1</td>
              <td>20/1/2001</td>
              <td>abas5das66x</td>
              <td>Nguyễn Đình An</td>
              <td>0123456789</td>
              <td>Đang giao</td>
              <td>115000</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
              <Td onClick={() => navigate(`../invoice?id=xxx`)}>
                <IconWraper>
                  <AiFillEye />
                </IconWraper>
              </Td>
            </tr>
            <tr>
              <td>1</td>
              <td>20/1/2001</td>
              <td>abas5das66x</td>
              <td>Nguyễn Đình An</td>
              <td>0123456789</td>
              <td>Đang giao</td>
              <td>115000</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
              <Td onClick={() => navigate(`../invoice?id=xxx`)}>
                <IconWraper>
                  <AiFillEye />
                </IconWraper>
              </Td>
            </tr>
          </tbody>
        </Table>
      </TableWraper>
    </Wraper>
  );
};

export default Orders;
