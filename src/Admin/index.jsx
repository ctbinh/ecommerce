import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { Main, Wraper } from "./components/style";
const Admin = () => {
  const [toogleNav, setToogleNav] = useState(true);
  return (
    <Wraper>
      <Navigation toogleNav={!toogleNav} />
      <Main width={toogleNav ? "270px" : "100px"}>
        <Header setToogleNav={setToogleNav} />
      </Main>
    </Wraper>
  );
};

export default Admin;
