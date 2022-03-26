import React, { useState } from "react";
import Header from "./Header";
import CardBox from "./CardBox";
import Navigation from "./Navigation";
import MainContent from "./MainContent";
import { Main, Wraper } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = () => {
  const [toogleNav, setToogleNav] = useState(true);
  const width = window.innerWidth;
  return (
    // <Wraper>
    //   <Navigation toogleNav={width > 700 ? !toogleNav : true} />
    //   <Main width={toogleNav ? "270px" : "100px"}>
    //     <Header setToogleNav={setToogleNav} />
    //     <CardBox />
    //     <MainContent />
    //   </Main>
    // </Wraper>
    <>
      <CardBox />
      <MainContent />
    </>
  );
};

export default Home;
