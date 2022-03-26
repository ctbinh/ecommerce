import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import {
  Container,
  Header,
  Img,
  Heading,
  List,
  Item,
  Title,
  Icon,
} from "./style.jsx";

const Navigation = ({ toogleNav, setIdOnClick }) => {
  const navigate = useNavigate();
  return (
    <Container toogle={!toogleNav}>
      <Header>
        {/* <Img
          src="https://sinhvienudn.com/wp-content/uploads/2021/04/26/admin/logo-bkhcm.png"
          alt=""
          he
        /> */}
        <Heading>BKU</Heading>
      </Header>

      <List>
        <Item onClick={() => navigate("./")}>
          <Icon>
            <AiOutlineHome />
          </Icon>
          <Title>Dashboard</Title>
        </Item>
        <Item onClick={() => navigate("product")}>
          <Icon>
            <FaProductHunt />
          </Icon>
          <Title>Product</Title>
        </Item>
        <Item onClick={() => navigate("customer")}>
          <Icon>
            <BsFillPeopleFill />
          </Icon>
          <Title>Customer</Title>
        </Item>
        <Item onClick={() => setIdOnClick(3)}>
          <Icon>
            <AiOutlineHome />
          </Icon>
          <Title>Dashborad 3</Title>
        </Item>
      </List>
    </Container>
  );
};

export default Navigation;
