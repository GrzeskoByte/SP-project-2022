import React, { useState, useEffect } from "react";

import {
  NavContainer,
  AnimateBar,
  StyledMobileNav,
  MobileNavContainer,
} from "./nav.styled";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
          <NavLink to="/">Oferta</NavLink>
        </li>
        <li>
          <NavLink to="/">O Nas</NavLink>
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

  const styles = {
    fontSize: "20px",
    cursor: "pointer",
    zIndex: "5",
    color: `${isOpen ? "white" : "black"}`,
    transition: "0.5s",
  };

  return (
    <MobileNavContainer>
      <div>
        <span style={{ color: "green" }}>SP</span> PROJEKT
      </div>
      {isOpen ? (
        <FontAwesomeIcon
          icon={faTimes}
          style={styles}
          className="bar"
          onClick={handleClick}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          style={styles}
          className="bar"
          onClick={handleClick}
        />
      )}

      <AnimateBar levelOfFill={props.fill} />

      <StyledMobileNav isOpen={isOpen}>
        <ul>
          <li>
            <NavLink to="/">Oferta</NavLink>
          </li>
          <li>
            <NavLink to="/">O Nas</NavLink>
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
