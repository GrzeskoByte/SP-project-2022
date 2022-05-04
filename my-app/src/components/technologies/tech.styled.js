import styled from "styled-components";

import { motion } from "framer-motion";

export const StyledTech = styled.section`
  padding: 10px 30px 10px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1100px) {
    grid-template-columns: repeat(6, 1fr);
  }
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
`;
export const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1;
  grid-row: 1/5;
  background-color: whitesmoke;

  &:nth-of-type(2) {
    grid-column: 2;
  }
  &:nth-of-type(3) {
    grid-column: 3;
  }

  & > p {
    font-size: 14px;
    text-align: center;
    max-width: 70%;
  }

  @media (max-width: 1100px) {
    grid-column: 1/4;

    &:nth-of-type(2) {
      grid-column: 4/7;
    }
    &:nth-of-type(3) {
      grid-column: 1/7;
      grid-row: 5/9;
    }
  }

  @media (max-width: 650px) {
    min-width: 350px;
    grid-column: 1/7;
    grid-row: 1/4;
    &:nth-of-type(2) {
      grid-column: 1/7;
      grid-row: 4/7;
    }
    &:nth-of-type(3) {
      grid-column: 1/7;
      grid-row: 7/10;
    }
    & > a > button {
      width: 50vw;
    }
  }
`;

export const StyledButton = styled.button`
  margin: 15px;
  padding: 10px 17px;
  border: none;
  border-radius: 2px;
  line-height: 2vh;
  width: auto;
  text-transform: capitalize;
  font-style: oblique;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
