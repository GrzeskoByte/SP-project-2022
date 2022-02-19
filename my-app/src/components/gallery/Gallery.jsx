import React, { useEffect } from "react";

import axios from "axios";

import { NavLink } from "react-router-dom";

import {
  StyledGallery,
  ImagesContainer,
  GalleryContainer,
  GalleryMenu,
} from "./gallery.styled.js";

function importAll(r) {
  return r.keys().map(r);
}

const Gallery = () => {
  let galleryItems = [];
  let data;
  const images = importAll(
    require.context("../../images", false, /\.(png|jpe?g|svg)$/)
  );

  for (let i = 0; i < images.length; i = i + 3) {
    galleryItems.push(
      <GalleryItem images={[images[i], images[i + 1], images[i + 2]]} key={i} />
    );
  }

  useEffect(() => {
    axios
      .get("http://localhost:9000/testAPI")
      .then((res) => {
        data = res;
      })
      .then(() => {
        console.log(data);
      });
  }, []);

  return (
    <GalleryContainer>
      <Menu />
      <StyledGallery>
        {galleryItems.map((item) => {
          return item;
        })}
      </StyledGallery>
    </GalleryContainer>
  );
};

const Menu = () => {
  return (
    <GalleryMenu>
      <nav>
        <ul>
          <li>
            <h1>
              <span>SP</span> PROJEKT
            </h1>
          </li>
          <li>
            <NavLink to="/">Wszystko</NavLink>
          </li>
          <li>
            <NavLink to="/">Jednorodzinne</NavLink>
          </li>
          <li>
            <NavLink to="/">Wielorodzinne</NavLink>
          </li>
          <li>
            <NavLink to="/">Użyteczności publicznej</NavLink>
          </li>
          <li>
            <NavLink to="/">Usługowe</NavLink>
          </li>

          <li>
            <NavLink to="/">Powrót</NavLink>
          </li>
        </ul>
      </nav>
    </GalleryMenu>
  );
};

const GalleryItem = (props) => {
  const { images } = props;
  return (
    <ImagesContainer>
      <img src={images[0]} alt="galleryImage" />
      <img src={images[1]} alt="galleryImage" />
      <img src={images[2]} alt="galleryImage" />
    </ImagesContainer>
  );
};

export default Gallery;
