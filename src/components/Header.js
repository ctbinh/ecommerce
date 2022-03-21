import React from "react";
import styled from "styled-components";
import { ShoppingCart, Person } from "@mui/icons-material";

const Header = () => {
  return <Row>
    <div style={{height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Logo src="https://www.hcmut.edu.vn/images/hcmut/logoBK.png" alt="Logo HCMUT">
      </Logo>
      <Title>
        BK SHOP
      </Title>
    </div>
    <SearchBar>
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

    <div>
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
  padding: 0px 60px 0px 20px;
`
const Logo = styled.img`
  /* max-width: 5%; */
  margin-left: 20px;
  height: 80%;
  display: inline;
  `
const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 30px;
  /* font-family: 'Candara', sans-serif; */
  display: inline;
  margin: 0px 90px 0px 30px;
`
const SearchBar = styled.div`
  display: inline;
  background-color: white;
  border: none;
  border-radius: 15px;
  padding: 2px 10px 2px 2px;
`
const SearchInput = styled.input`
  display: inline;
  border: none;
  outline: none;
  margin-left: 5px;
  width: 220px;
`
const SearchButton = styled.button`
  display: inline;
  border: none;
  background-color: gray;
  border-radius: 50%;
  width: 26px;
  padding: 5px;
  
`
const NavBar = styled.div`
  display: inline;
    
`
const NavItem = styled.a`
  display: inline;
  text-decoration: none;
  /* font-family: 'Muli', sans-serif; */
  text-transform: uppercase;
  color: white;
  padding: 20px;
  font-weight: bold;
`
const CartIcon = styled(ShoppingCart)`
  color: white;
  font-size: 50pt;
  display: inline;
`
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
  bottom: 18px;
  right: 12px;
  /* font-family: 'Helvetica Neue', Helvetica, Arial; */
`
const UserIcon = styled(Person)`
  color: white;
`

export default Header;
