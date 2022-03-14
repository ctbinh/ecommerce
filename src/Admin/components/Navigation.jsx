import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
const Container = styled.div`
  position: fixed;

  background-color: #297bff;
  height: 100vh;
  /* width: 18.75em; */
  width: ${(props) => (!props.toogle ? "18.75em" : "10em")};
`;
const Heading = styled.h2``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8em;
  color: white;
  padding: 1em 1em;
`;
const Img = styled.img`
  height: 1.4em;
`;
const List = styled.ul`
  /* position: fixed; */
  padding-left: 0.625em;
`;

const Item = styled.li`
  list-style-type: none;
  padding: 1em 1em;
  font-size: 1.4em;
  color: white;
  /* height: 3.125em; */
  /* transition: 0.1s; */
  position: relative;
  cursor: pointer;
  /* line-height: 1.2em; */
  &:hover {
    color: #297bff;
    background-color: white;
    border-top-left-radius: 1.875em;
    border-bottom-left-radius: 1.875em;
  }
  &:hover::after {
    /* background-color: red; */
    content: "";
    position: absolute;
    right: 0px;
    top: -3.125em;
    width: 3.125em;
    height: 3.125em;
    border-radius: 50%;
    box-shadow: 2em 2em 0 10px white;
    /* background-color: transparent; */
  }
  &:hover::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -3.125em;
    width: 3.125em;
    height: 3.125em;
    border-radius: 50%;
    box-shadow: 2em -2em 0px 10px white;
    background-color: transparent;
  }
`;
const Title = styled.span`
  margin-left: 1em;
`;
const toogleNav = () => {
  console.log(Container);
};
const Navigation = () => {
  const [toogleNav, setToogleNav] = useState(true);
  console.log(toogleNav);
  return (
    <Container>
      <Header toogle={toogleNav}>
        <Img
          src="https://sinhvienudn.com/wp-content/uploads/2021/04/26/admin/logo-bkhcm.png"
          alt=""
          he
        />
        <Heading>BKU</Heading>
        <AiOutlineMenu
          style={{ cursor: "pointer" }}
          onClick={() => setToogleNav((x) => !x)}
        />
      </Header>

      <List>
        <Item>
          <AiOutlineHome />
          <Title>Dashborad</Title>
        </Item>
        <Item>
          <AiOutlineHome />
          <Title>Dashborad</Title>
        </Item>
        <Item>
          <AiOutlineHome />
          <Title>Dashborad</Title>
        </Item>
        <Item>
          <AiOutlineHome />
          <Title>Dashborad</Title>
        </Item>
      </List>
    </Container>
  );
};

export default Navigation;
