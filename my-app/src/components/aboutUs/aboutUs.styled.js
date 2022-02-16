import styled from "styled-components";

import img from "../../images/i30.jpg";

export const StyledAboutUs = styled.section`
  display: grid;
  grid-template-areas: "A B";
  height: 50vh;
  background-color: royalblue;
  min-width: 1200px;

  & > .firstOfferSec {
    width: 50vw;
    grid-area: A;
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  & > .secondOfferSec {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: B;
    background-color: white;
    text-align: left;
    & > p {
      padding: 10px 10%;
      word-spacing: 1px;
      font-size: 15px;
      font-style: italic;
    }
    & > p > h2 {
      margin-bottom: 5px;
    }
  }
`;
