import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import {
  Search,
  Input,
  ImgAvatar,
  Avatar,
  HeaderWrapper,
  Icon,
  IconSearch,
} from "./style";
const Button = styled.button`
  outline: none;
  border: 1px solid #ccc;
  padding: 8px 16px;
  border-radius: 6px;
  background-color: green;
  color: white;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: green;
  }
`;
const Header = ({ setToogleNav, isProduct }) => {
  return (
    <HeaderWrapper>
      <Icon>
        <AiOutlineMenu
          style={{ cursor: "pointer" }}
          onClick={() => setToogleNav((toogleNav) => !toogleNav)}
        />
      </Icon>
      <Search>
        <Input type="text" placeholder="Search here"></Input>
        <IconSearch>
          <BsSearch />
        </IconSearch>
      </Search>
      {isProduct && <Button>Add Product</Button>}
      <Avatar>
        <ImgAvatar src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/148352211_1315852945481787_1410223456476714730_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2ZRYlKtMpd4AX9wuKoa&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT_83y75hqXc2JkKyadVt70s7faxyEkeIPLRuSF4E6Oc8A&oe=6254FAA1"></ImgAvatar>
      </Avatar>
    </HeaderWrapper>
  );
};

export default Header;
