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

const Navigation = ({ toogleNav }) => {
  return (
    <Container toogle={!toogleNav}>
      <Header>
        <Img
          src="https://sinhvienudn.com/wp-content/uploads/2021/04/26/admin/logo-bkhcm.png"
          alt=""
          he
        />
        <Heading>BKU</Heading>
      </Header>

      <List>
        <Item>
          <Icon>
            <AiOutlineHome />
          </Icon>
          <Title>Dashboard</Title>
        </Item>
        <Item>
          <Icon>
            <AiOutlineHome />
          </Icon>
          <Title>Dashborad</Title>
        </Item>
        <Item>
          <Icon>
            <AiOutlineHome />
          </Icon>
          <Title>Dashborad</Title>
        </Item>
        <Item>
          <Icon>
            <AiOutlineHome />
          </Icon>
          <Title>Dashborad</Title>
        </Item>
      </List>
    </Container>
  );
};

export default Navigation;
