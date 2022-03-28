import React, { useState } from "react";
import Header from "./Header";
import CardBox from "./CardBox";
import Navigation from "./Navigation";
import MainContent from "./MainContent";
import { Main } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
const Wraper = styled.div`
  margin: 14px 12px 30px;
`;
const Home = () => {
  const [toogleNav, setToogleNav] = useState(true);
  const width = window.innerWidth;
  return (
    <Wraper>
      <CardBox />
      <MainContent />
    </Wraper>
  );
};

export default Home;
