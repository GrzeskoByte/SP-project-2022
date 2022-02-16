import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  height: 6vh;
  min-width: 1070px;
  width: 100%;
  z-index: 999;
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

    & > li > a {
      text-decoration: none;
      color: black;
    }
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
