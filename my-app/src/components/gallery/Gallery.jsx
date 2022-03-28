import React, { useEffect, useState, useReducer } from "react";

import sanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  StyledGallery,
  ImagesContainer,
  GalleryContainer,
  SliderImagesContainer,
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

  const builder = imageUrlBuilder(sanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  };

  const fetchAll = async () => {
    let images = [];
    let captions = [];
    await sanityClient.fetch(`*[_type=='galleryImage']`).then((res) => {
      return res.map((item) => {
        captions.push(item.caption);
        return item.images.map((item) => {
          return images.push(item.asset._ref);
        });
      });
    });
    setImages(images);
    setCaptions(captions);
  };

  const fetchByCategory = async (category) => {
    let images = [];
    let captions = [];
    await sanityClient
      .fetch(`*[_type=='galleryImage' && category=='${category}' ]`)
      .then((res) => {
        return res.map((item) => {
          captions.push(item.caption);
          return item.images.map((item) => {
            return images.push(item.asset._ref);
          });
        });
      });
    setImages(images);
    setCaptions(captions);
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

    if (category === "all") fetchAll();
    else fetchByCategory(category);

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

const Slider = (props) => {
  const { isModalOpen, images, index, urlFor, dispatch, handleShowImage } =
    props;

  return (
    <dialog open={isModalOpen}>
      <FontAwesomeIcon
        icon={faTimes}
        color="white"
        className="closeModal"
        onClick={() =>
          dispatch({ type: "setModal", index: index, isModalOpen: false })
        }
      />

      <img
        src={urlFor(images[index]).url()}
        key={index}
        index={index}
        alt="building"
      />

      <SliderImagesContainer>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => dispatch({ type: "decrementIndex" })}
        />

        <img
          src={`${urlFor(
            images[index - 1 < 0 ? images.length - 1 : index - 1]
          ).url()}`}
          alt="previousImage"
          index={index - 1 < 0 ? images.length - 1 : index - 1}
          onClick={handleShowImage}
        />
        <img
          src={`${urlFor(images[index]).url()}`}
          alt="currentImage"
          index={index}
          onClick={handleShowImage}
          style={{ border: "2px solid white" }}
        />

        <img
          src={`${urlFor(
            images[index === images.length - 1 ? 0 : index + 1]
          ).url()}`}
          alt="nextImage"
          index={index === images.length - 1 ? 0 : index + 1}
          onClick={handleShowImage}
        />

        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={() => {
            dispatch({ type: "incrementIndex" });
          }}
        />
      </SliderImagesContainer>
    </dialog>
  );
};

export default Gallery;
