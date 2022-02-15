import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  height: 6vh;
  border-bottom: 4px solid cadetblue;
  min-width: 590px;
  & > ul {
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: black;
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
      color: white;
    }
  }
`;
