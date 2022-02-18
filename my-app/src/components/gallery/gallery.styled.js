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
  grid-gap: 2%;
  width: 100%;
  margin: 10px 0;
  transform: translateX(-10px);
  & > * {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  & > img:nth-of-type(1) {
    grid-column: 1;
  }
  & > img:nth-of-type(2) {
    grid-column: 2;
  }
  & > img:nth-of-type(3) {
    grid-column: 3;
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);

    & > img:nth-of-type(1) {
      grid-column: 1/3;
    }
    & > img:nth-of-type(2) {
      grid-column: 3/5;
    }
    & > img:nth-of-type(3) {
      grid-column: 1/5;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);

    & > img:nth-of-type(1) {
      grid-column: 1;
    }
    & > img:nth-of-type(2) {
      grid-column: 1;
    }
    & > img:nth-of-type(3) {
      grid-column: 1;
    }
  }

  @media (max-width: 900px) {
    width: 95%;
  }
`;

export const GalleryContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
`;
export const GalleryMenu = styled.aside`
  position: fixed;
  top: 0;
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

  @media (max-width: 900px) {
    display: none;
  }
`;
