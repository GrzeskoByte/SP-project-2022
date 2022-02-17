import React, { useState, useEffect } from "react";

import {
  NavContainer,
  AnimateBar,
  StyledMobileNav,
  MobileNavContainer,
} from "./nav.styled";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [fillDegree, setFillDegree] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const heightOfSite = document.body.clientHeight;

    const degree = (window.scrollY / heightOfSite) * 200;

    setFillDegree(degree);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (window.innerWidth < 530) {
      setIsVisible(false);
    } else setIsVisible(true);

    window.addEventListener("resize", () => {
      if (window.innerWidth < 530) {
        setIsVisible(false);
      } else setIsVisible(true);
    });

    return () => {
      window.removeEventListener("scroll");
      window.removeEventListener("resize");
    };
  }, []);

  return (
    <>
      {isVisible ? (
        <DesktopNav fill={fillDegree} />
      ) : (
        <MobileNav fill={fillDegree} />
      )}
    </>
  );
};

const DesktopNav = (props) => {
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
      <AnimateBar levelOfFill={props.fill} />
    </NavContainer>
  );
};

const MobileNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <MobileNavContainer>
      <FontAwesomeIcon
        icon={faBars}
        style={{
          fontSize: "20px",
          cursor: "pointer",
          zIndex: "5",
          color: `${isOpen ? "white" : "black"}`,
        }}
        className="bar"
        onClick={handleClick}
      />
      <AnimateBar levelOfFill={props.fill} />

      <StyledMobileNav isOpen={isOpen}>
        <ul>
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
      </StyledMobileNav>
    </MobileNavContainer>
  );
};

export default Navigation;
