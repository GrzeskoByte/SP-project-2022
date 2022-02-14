import React from "react";

import { NavContainer } from "./nav.styled";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <NavLink to="/">
            <span style={{ color: "green" }}>SP</span> PROJEKT
          </NavLink>
        </li>
        <li>
          <NavLink to="/">O Nas</NavLink>
        </li>
        <li>
          <NavLink to="/">Oferta</NavLink>
        </li>
        <li>
          <NavLink to="/">Technologie</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Galeria</NavLink>
        </li>
        <li>
          <NavLink to="/">Kontakt</NavLink>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navigation;
