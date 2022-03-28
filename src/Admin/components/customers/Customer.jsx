import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
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
const IconWraper = styled.div`
  display: inline-block;
  margin: 0 4px;
  color: ${(props) => (props.color ? props.color : "inherit")};
  cursor: pointer;
`;
const Customer = () => {
  return (
    <Wraper>
      <TableWraper>
        <h3>Customer List</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>UserID</th>
              <th>Username</th>
              <th>Password</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>BirtDay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>xx</td>
              <td>abas5das66x</td>
              <td>anmoi</td>
              <td>anmoi123</td>
              <td>Nguyễn Đình An</td>
              <td>an.nguyendinh@hcmut.edu.vn</td>
              <td>0123456789</td>
              <td>1/1/2001</td>
              <td>
                <IconWraper>
                  <MdModeEditOutline />
                </IconWraper>
                <IconWraper color="red">
                  <AiFillDelete />
                </IconWraper>
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWraper>
    </Wraper>
  );
};

export default Customer;
