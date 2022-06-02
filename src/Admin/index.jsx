import React, { useState } from "react";
import Navigation from "./components/Navigation";
import { Main, Wraper } from "./components/style";
import { Link, Outlet } from "react-router-dom";
import CardBox from "./components/CardBox";
import MainContent from "./components/MainContent";
import Product from "./components/products";
import Header from "./components/Header";
import store from "./store";
import { Provider } from "react-redux";
const Admin = () => {
  const [toogleNav, setToogleNav] = useState(true);
  const [idOnClick, setIdOnClick] = useState(0);
  const width = window.innerWidth;
  return (
    <Provider store={store}>
      <Wraper>
        <Navigation
          toogleNav={width > 700 ? !toogleNav : true}
          setIdOnClick={setIdOnClick}
        />

        <Main width={toogleNav ? "256px" : "77px"}>
          <Header setToogleNav={setToogleNav} />
          <div style={{ marginTop: "60px" }}>
            <Outlet />
          </div>
          {/* {idOnClick === 0 && (
          <>
            <CardBox />
            <MainContent />
          </>
        )}
        {idOnClick === 1 && (
          <>
            <Product />
          </>
        )} */}
        </Main>
      </Wraper>
    </Provider>
  );
};

export default Admin;
