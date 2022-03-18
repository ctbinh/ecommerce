import React, { useState } from "react";
import Header from "./components/Header";
import CardBox from "./components/CardBox";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import { Main, Wraper } from "./components/style";
const Admin = () => {
  const [toogleNav, setToogleNav] = useState(true);
  return (
    <Wraper>
      <Navigation toogleNav={!toogleNav} />
      <Main width={toogleNav ? "270px" : "100px"}>
        <Header setToogleNav={setToogleNav} />
        <CardBox />
        <MainContent />
      </Main>
    </Wraper>
  );
};

export default Admin;
