import styled from "styled-components";

export const ModalStyled = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  border: 3px solid #222;
  border-radius: 5px;
  padding: 15px;
  transform: translate(-50%, -50%);
  max-width: 70vw;
  z-index: 100;
  overflow-x: hidden;

  &::backdrop {
    backdrop-filter: blur(2px);
  }

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > p {
      flex-grow: 1;
      padding: 10px 5%;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
    & > button {
      margin: 15px;
      padding: 10px 25px;
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
    }

    & > img {
      flex-grow: 1;
      max-height: 400px;
      @media (max-width: 620px) {
        width: 300px;
      }
    }
  }
`;
