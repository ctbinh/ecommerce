import React from "react";
import styled from "styled-components";
import { ShoppingCart, Person } from "@mui/icons-material";

const Header = () => {
  return <Row>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Logo src="https://www.hcmut.edu.vn/images/hcmut/logoBK.png" alt="Logo HCMUT">
      </Logo>
      <Title>
        BK SHOP
      </Title>
    </div>
    <SearchBar className="searchbar">
      <SearchButton >
        <i class="fa fa-search"></i>
      </SearchButton>
      <SearchInput type="text" name="search_book" id="" placeholder="Search..." />
    </SearchBar>

    <NavBar>
      <NavItem>ABOUT</NavItem>
      <NavItem>NEWS</NavItem>
      <NavItem>BEST SELLER</NavItem>
      <NavItem>DISCOUNT</NavItem>
    </NavBar>

    <div style={{ marginLeft: 'auto', minWidth: '60px'}}>
      <CartIcon />
      <CartCounter>20</CartCounter>
    </div>

    <UserIcon>
    </UserIcon>
  </Row>;
};

const Row = styled.div`
  background-color: black;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 4vw 0px 4vw;
`;
const Logo = styled.img`
  height: 80%;
  display: inline;
  margin-right: 1vw;
`;
const Title = styled.p`
  color: white;
  font-size: 3vw;
  width: 22vw;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  /* letter-spacing: 2px; */
  display: inline;
  margin: 0px;
  @media (max-width: 480px){
    display: none;
  }
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 15px;
  margin-right: 2vw;
  padding: 2px 10px 2px 2px;
  @media (max-width: 768px){
    display: none;
  }
`;
const SearchInput = styled.input`
  display: inline;
  border: none;
  outline: none;
  margin-left: 15px;
  width: 10vw;
`;
const SearchButton = styled.button`
  display: inline;
  border: none;
  background-color: gray;
  border-radius: 50%;
  width: 24px;
  /* padding: 5px; */
  i {
    width: 16px;
  }
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  /* max-width: 300px; */
  @media (max-width: 480px){
    display: none;
  }
`;
const NavItem = styled.a`
  display: inline;
  text-decoration: none;
  /* font-family: 'Muli', sans-serif; */
  text-transform: uppercase;
  color: white;
  padding: 1vw;
  font-weight: bold;
  font-size: 1.5vw;
  @media (max-width: 768px){
    /* display: none; */
    font-size: 2vw;
  }
`;
const CartIcon = styled(ShoppingCart)`
  color: white;
  font-size: 50pt;
  display: inline;
`;
const CartCounter = styled.p`
  color: black;
  background-color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 2px;
  border-radius: 7px;
  border: 1px black solid;
  display: inline;
  position: relative;
  bottom: 10px;
  right: 12px;
  /* font-family: 'Helvetica Neue', Helvetica, Arial; */
  @media (max-width: 768px){
    /* width: 15vw; */
  }
`;
const UserIcon = styled(Person)`
  color: white;
  width: 10vw;
`;

export default Header;
