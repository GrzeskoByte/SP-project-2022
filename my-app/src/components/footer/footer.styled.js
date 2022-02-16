import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  height: 15vh;
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
  }
  & > .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 2;
    grid-row: 1;
  }
`;
