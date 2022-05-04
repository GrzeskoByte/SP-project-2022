import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  height: 6vh;
  min-width: 1070px;
  width: 100vw;
  z-index: 4;
  margin-right: 20px;
  & > ul {
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: white;
    list-style: none;
    font-size: 0.9rem;
    font-weight: bold;
    flex-grow: 1;

    & > li:nth-of-type(1) {
      flex-grow: 5;
      font-size: 1.5rem;
    }

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      padding: 5px 10px;
      cursor: pointer;
      text-transform: uppercase;
    }

    & > li:hover {
      border-bottom: 3px solid black;
    }
    & > li:nth-of-type(1):hover {
      border-bottom: none;
    }

    & > li > a {
      text-decoration: none;
      color: black;
    }
  }
  @media (max-width: 1024px) {
    min-width: 530px;

    & > li:nth-of-type(1) {
      flex-grow: 3;
      font-size: 1rem;
    }
  }
  @media (max-width: 750px) {
    min-width: 530px;
    & > ul {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

export const AnimateBar = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  transition: 0.2s;
  width: ${(props) => props.levelOfFill}%;
  background-color: #000;
`;

export const MobileNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100vw;
  height: 6vh;
  background-color: #fff;
  z-index: 4;
  & > div {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const StyledMobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: black;

  & > ul {
    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: center;
    list-style: none;
    font-size: 1.3rem;
    font-weight: bold;
    flex-grow: 1;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      margin: 10px 0;
      padding: 5px 10px;
      cursor: pointer;
      text-transform: uppercase;
    }

    & > li:hover {
      border-bottom: 3px solid black;
    }
    & > li:nth-of-type(1):hover {
      border-bottom: none;
    }

    & > li > a {
      text-decoration: none;
      color: white;
    }
  }
`;
