import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  height: 15vh;
  min-width: 550px;
  background-color: black;

  & > div > ul {
    list-style: none;
  }
  & > div > ul > li {
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
