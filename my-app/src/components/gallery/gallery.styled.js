import styled from "styled-components";

export const StyledGallery = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  min-width: 250px;

  @media (max-width: 900px) {
    width: 100vw;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
  width: 100%;
  margin: 10px 0;
  transform: translateX(-10px);
  & > * {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: 0.2s;
  }
  & > *:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 900px) {
    margin-top: 8vh;
    transform: translateX(0);
    width: 95%;
  }
`;

export const GalleryContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  position: relative;
  dialog {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    & > img {
      width: 50%;
    }
    & > .closeModal {
      position: absolute;
      top: 10px;
      right: 30px;
      font-size: 30px;
      color: white;
      cursor: pointer;
    }
  }
`;

export const GalleryMenu = styled.aside`
  position: fixed;
  top: 7vh;
  left: 0;
  height: 100vh;
  width: 29vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding: 0 15px;

  & > h1 {
    & > span {
      color: green;
    }
  }

  & nav > ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    list-style: none;
    height: 50vh;
    & > li {
      font-size: 16px;
      font-style: italic;
      font-weight: bold;
      margin: 10px 0;
      cursor: pointer;
    }
    & > li:hover {
      color: green;
      & > a {
        color: green;
      }
    }
    & > li > a {
      color: black;
      text-decoration: none;
    }
    & > li > h1 {
      font-style: normal;
      & > span {
        color: green;
      }
    }
  }
`;

export const MenuMobile = styled.section`
  z-index: 5;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  width: 100vw;
  padding: 20px;
  background-color: #fff;
  & > h1 {
    font-size: 25px;
  }
  & .bar {
    font-size: 25px;
    cursor: pointer;
    transition: 0.5s;
  }

  & .menuIcon {
    z-index: 8;
  }
`;

export const OpenMobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 6;

  & > ul {
    list-style: none;
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    & > li {
      margin: 10px 0;
      padding: 5px 10px;
      cursor: pointer;
      text-transform: uppercase;
      & > a {
        text-decoration: none;
        color: black;
      }
      &:hover {
        color: green;
      }
      & > a:hover {
        color: green;
      }
    }
  }
`;
