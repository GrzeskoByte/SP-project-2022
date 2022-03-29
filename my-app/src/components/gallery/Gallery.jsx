import React, { useEffect, useState, useReducer } from "react";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import Slider from "./Slider";

import fetchAll from "./helpers/fetchAll";
import fetchByCategory from "./helpers/fetchByCategory";
import urlFor from "./helpers/urlFor";

import {
  StyledGallery,
  ImagesContainer,
  GalleryContainer,
} from "./gallery.styled.js";

const Gallery = () => {
  const [images, setImages] = useState(null);
  const [captions, setCaptions] = useState(null);

  const [category, setCategory] = useState("all");

  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case "showImage":
        return {
          index: Number(action.index),
          isModalOpen: action.isModalOpen,
        };
      case "setModal":
        return {
          ...state,
          isModalOpen: action.isModalOpen,
        };
      case "decrementIndex":
        return {
          index: state.index--,
          ...state,
        };
      case "incrementIndex":
        return {
          index: state.index++,
          ...state,
        };
      default:
        throw new Error((err) => console.log(err));
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    index: null,
    isModalOpen: false,
  });

  const handleShowImage = (e) => {
    const index = e.target.getAttribute("index");
    dispatch({ type: "showImage", index: index, isModalOpen: true });
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

    if (category === "all") fetchAll(setImages, setCaptions);
    else fetchByCategory(category, setImages, setCaptions);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [category]);

  return (
    <GalleryContainer>
      {isMobile ? (
        <MobileMenu
          isOpen={isMobileOpen}
          setIsOpen={setIsMobileOpen}
          setCategory={setCategory}
        />
      ) : (
        <Menu setCategory={setCategory} />
      )}
      <StyledGallery>
        <ImagesContainer>
          {images && captions !== null
            ? images.map((imgUrl, index) => {
                return (
                  <img
                    src={urlFor(imgUrl).url()}
                    key={index}
                    index={index}
                    alt="building"
                    onClick={handleShowImage}
                    caption={captions[index]}
                  />
                );
              })
            : ""}
        </ImagesContainer>
      </StyledGallery>
      {state.isModalOpen && images ? (
        <Slider
          isModalOpen={state.isModalOpen}
          images={images}
          index={state.index}
          urlFor={urlFor}
          dispatch={dispatch}
          handleShowImage={handleShowImage}
        />
      ) : null}
    </GalleryContainer>
  );
};

export default Gallery;
