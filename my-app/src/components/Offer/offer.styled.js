import styled from "styled-components";

export const StyledOffer = styled.section`
  display: grid;
  grid-template-areas: "A B";
  height: 70vh;
  background-color: royalblue;
  min-width: 1200px;

  & > #firstOfferSec {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: A;
    background-color: white;
    text-align: left;

    & > ul {
      list-style: none;
      & > li {
        font-size: 14px;
        padding: 5px 0;
        font-style: italic;
      }
    }
  }
  & > #secondOfferSec {
    grid-area: B;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
`;
