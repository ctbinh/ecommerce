import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Admin = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Home />} />

      {/* <Wraper>
          <Navigation toogleNav={!toogleNav} />
          <Main width={toogleNav ? "270px" : "100px"}>
            <Header setToogleNav={setToogleNav} />
            <CardBox />
            <MainContent />
          </Main>
        </Wraper> */}
    </Routes>
  );
};

export default Admin;
