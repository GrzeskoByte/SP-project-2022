import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  min-width: 288px;
  background-color: black;

  & > div > ul {
    list-style: none;
  }
  & > div > ul > li {
    margin: 7px 0;
    cursor: pointer;
  }
  & > div > ul > li:hover {
    text-decoration: underline;
  }

  & > * {
    color: white;
    font-size: 14px;
  }

  & > .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1;
    grid-row: 1;
    padding: 0 15px;
  }
  & > .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 2;
    grid-row: 1;
    padding: 0 15px;
  }

  @media (max-width: 500px) {
    grid-gap: 0px;
    & > .contact {
      align-items: flex-start;
      margin: 0 auto;
      grid-column: 1;
      grid-row: 1;
    }
    & > .links {
      align-items: flex-start;
      grid-column: 1/3;
      grid-row: 2;
      background-color: black;
    }
  }
`;
