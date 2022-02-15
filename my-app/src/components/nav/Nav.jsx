import React, { useState, useEffect } from "react";

import { NavContainer, AnimateBar } from "./nav.styled";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [fillDegree, setFillDegree] = useState(0);

  const handleScroll = () => {
    const heightOfSite = document.body.clientHeight;

    const degree = (window.scrollY / heightOfSite) * 200;

    setFillDegree(degree);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

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
      <AnimateBar levelOfFill={fillDegree} />
    </NavContainer>
  );
};

export default Navigation;
