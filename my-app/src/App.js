import { default as Nav } from "./components/nav/Nav.jsx";
import Header from "./components/header/Header.jsx";
import Offer from "./components/Offer/Offer.jsx";

import { Route, Routes } from "react-router-dom";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppOnDefaultPath />}></Route>
    </Routes>
  );
};

const AppOnDefaultPath = () => {
  return (
    <>
      <Nav />
      <Header />
      <Offer />
    </>
  );
};

export default App;
