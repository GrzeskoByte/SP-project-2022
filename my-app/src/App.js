import { default as Nav } from "./components/nav/Nav.jsx";
import Header from "./components/header/Header.jsx";
import Offer from "./components/Offer/Offer.jsx";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Tech from "./components/technologies/Tech.jsx";
import Footer from "./components/footer/Footer.jsx";

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
      <AboutUs />
      <Tech />
      <Footer />
    </>
  );
};

export default App;
