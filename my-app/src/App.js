import { default as Nav } from "./components/nav/Nav.js";

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
  return <Nav />;
};

export default App;
