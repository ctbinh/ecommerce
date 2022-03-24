import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
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
        <Item onClick={() => setIdOnClick(0)}>
          <Icon>
            <AiOutlineHome />
          </Icon>
          <Title>Dashboard 0</Title>
        </Item>
        <Item onClick={() => setIdOnClick(1)}>
          <Icon>
            <AiOutlineHome />
          </Icon>
          <Title>Sản phẩm </Title>
        </Item>
        <Item onClick={() => setIdOnClick(2)}>
          <Icon>
            <AiOutlineHome />
          </Icon>
          <Title>Dashborad 2</Title>
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
