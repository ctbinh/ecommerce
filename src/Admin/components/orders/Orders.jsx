import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder, ordersSelector } from "../../store/reducers/ordersSlice";
import { useEffect } from "react";
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
  // navigate
  const navigate = useNavigate();

  // redux
  const allOrder = useSelector(ordersSelector);
  const dispatch = useDispatch();

  // effect
  useEffect(() => {
    dispatch(getAllOrder());
  }, []);
  return (
    <Wraper>
      <TableWraper>
        <h3>Customer List</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Ship Fee</th>
              <th>Total</th>
              <th>Date</th>
              <th>State</th>
              {/* <th>Action</th> */}
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {allOrder.map((order) => {
              return (
                <tr>
                  <td>{order.order_id}</td>
                  <td>{order.name}</td>
                  <td>{order.phone}</td>
                  <td>{order.total_ship}</td>
                  <td>{order.total}</td>
                  <td>{order.date}</td>
                  <td>{order.state}</td>
                  {/* <td>
                  <IconWraper>
                    <MdModeEditOutline />
                  </IconWraper>
                  <IconWraper color="red">
                    <AiFillDelete />
                  </IconWraper>
                </td>
   */}
                  <Td
                    onClick={() => navigate(`../invoice?id=${order.order_id}`)}
                  >
                    <IconWraper>
                      <AiFillEye />
                    </IconWraper>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableWraper>
    </Wraper>
  );
};

export default Orders;
