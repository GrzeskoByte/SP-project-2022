import React, { useEffect, useState } from "react";

import sanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(null);

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

  const handleShowImage = (e) => {
    const index = e.target.getAttribute("index");
    setIsModalOpen(true);
    setIndex(index);
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
      {isModalOpen ? (
        <dialog open={isModalOpen}>
          <FontAwesomeIcon
            icon={faTimes}
            color="white"
            className="closeModal"
            onClick={() => setIsModalOpen(false)}
          />
          <img src={urlFor(images[index]).url()} alt="MainSliderImage" />
        </dialog>
      ) : null}
    </GalleryContainer>
  );
};

export default Gallery;
