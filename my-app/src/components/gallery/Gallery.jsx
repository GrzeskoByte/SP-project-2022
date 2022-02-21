import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import sanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

import MobileMenu from "./MobileMenu";

import {
  StyledGallery,
  ImagesContainer,
  GalleryContainer,
  GalleryMenu,
} from "./gallery.styled.js";

const Gallery = () => {
  const [images, setImages] = useState(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const builder = imageUrlBuilder(sanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  };

  const fetchAll = async () => {
    let images = [];

    await sanityClient.fetch(`*[_type=='galleryImage'].images`).then((res) => {
      return res.map((item) => {
        return item.map((item) => {
          return images.push(item.asset._ref);
        });
      });
    });
    setImages(images);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsMobile(true);
      } else setIsMobile(false);
    };

    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else setIsMobile(false);

    window.addEventListener("resize", handleResize);
    fetchAll();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <GalleryContainer>
      {isMobile ? (
        <MobileMenu isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
      ) : (
        <Menu />
      )}
      <StyledGallery>
        <ImagesContainer>
          {images !== null
            ? images.map((imgUrl, index) => {
                return (
                  <img src={urlFor(imgUrl).url()} key={index} alt="building" />
                );
              })
            : ""}
        </ImagesContainer>
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
          <li>Wszystko</li>
          <li>Jednorodzinne</li>
          <li>Wielorodzinne</li>
          <li>Użyteczności publicznej</li>
          <li>Usługowe</li>

          <li>
            <NavLink to="/">Powrót</NavLink>
          </li>
        </ul>
      </nav>
    </GalleryMenu>
  );
};

export default Gallery;
