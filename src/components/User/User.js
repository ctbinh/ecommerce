import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styled from 'styled-components'
import { Breadcrumbs, Link, Typography } from '@mui/material'

const User = () => {
  const [targetNavItem, setTargetNavItem] = useState('my-account')
  const [targetNavChildItem, setTargetNavChildItem] = useState('infor')
  const changeNavItem = (item) => {
    if(item !== 'my-account') {
      setTargetNavChildItem('')
    }
    else {
      setTargetNavChildItem('infor')
    }
    setTargetNavItem(item)
  }
  const changeNavChildItem = (item) => {
    setTargetNavChildItem(item)
    setTargetNavItem('my-account')
  }
  return (
    <>
    <Header/>
    <Container>
      <Head>
        <Breadcrumbs separator="›" maxItems={2} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">My Account</Typography>
        </Breadcrumbs>
        <h2 style={{marginTop: '10px'}}>My Account</h2>
      </Head>
      <Content>
        <NavBox>
          <NavItem className={targetNavItem==='my-account'?'active':''} onClick={() => changeNavItem('my-account')}>My Account</NavItem>
          <NavChildItem className={targetNavChildItem==='infor'?'active':''} onClick={() => changeNavChildItem('infor')}>Account information</NavChildItem>
          <NavChildItem className={targetNavChildItem==='change-pass'?'active':''} onClick={() => changeNavChildItem('change-pass')}>Change password</NavChildItem>
          <NavItem className={targetNavItem==='my-orders'?'active':''} onClick={() => changeNavItem('my-orders')}>My Orders</NavItem>
          <Hr/>
          <NavItem className={targetNavItem==='my-wishlist'?'active':''} onClick={() => changeNavItem('my-wishlist')}>My Wish List</NavItem>
        </NavBox>
      </Content>
    </Container>
    <Footer/>
    </>
  )
}

const Hr = styled.hr`
  margin-left: 15px;
  border: 0; 
  height: 0.2px;
  background-image: -webkit-linear-gradient(#d6d6d6, #d6d6d6, #d6d6d6);
`
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const NavChildItem = styled.div`
  padding: 10px 0;
  margin-left: 30px;
  cursor: pointer;
  &.active {
    color: #0156FF;
  }
`
const NavItem = styled.div`
  padding: 10px 0;
  padding-left: 15px;
  cursor: pointer;
  &.active {
    border-left: 3px solid #0156FF;
  }
`
const NavBox = styled.div`
  color: gray;
  background-color: #F5F7FF;
  width: 20%;
  padding: 5px 15px 5px 0;
`
const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`

export default User