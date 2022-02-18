import styled from "styled-components";

import img from "../../images/i30.jpg";

export const StyledAboutUs = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
  background-color: royalblue;

  & > .firstOfferSec {
    grid-column: 1;
    grid-row: 1/6;
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 1200px) {
      grid-column: 0;
    }
  }

  & > .secondOfferSec {
    grid-column: 2;
    grid-row: 1/6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    text-align: left;
    & > p {
      padding: 10px 10%;
      word-spacing: 1px;
      font-size: 15px;
      font-style: italic;
    }
    & > h2 {
      margin-left: 10%;
      margin-bottom: 5px;
    }
    @media (max-width: 1200px) {
      grid-column: 1/3;
      grid-row: 1/6;
      text-align: center;
      align-items: center;
      min-width: 350px;
      background-color: #222;
      color: whitesmoke;
      & > h2 {
        margin-left: 0;
      }
    }
  }
`;
