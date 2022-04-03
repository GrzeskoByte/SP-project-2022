import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin-top: 6vh;
  min-width: 1060px;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
`;

export const HeaderCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex;
  padding: 30px 40px;
  flex-grow: 1;
  transition: 0.5s;
  height: 100%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;
  }

  &:hover::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  & > h3 {
    position: relative;
    z-index: 2;
    font-size: 1.8rem;
    color: white;
  }
`;

export const Tags = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div {
    display: inline-block;
    border-radius: 3px;
    padding: 2px 5px;
    margin-right: 10px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 100;
    background-color: black;
    color: white;
    z-index: 2;
  }
`;

export const StyledMobileHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  background-color: black;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  text-transform: uppercase;
  /* z-index: 10; */
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 2;
    cursor: pointer;
  }
  & > h2 {
    cursor: pointer;
    z-index: 3;
  }
`;
