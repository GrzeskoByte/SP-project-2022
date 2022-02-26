import React, { useEffect, useState } from "react";

import sanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import {
  StyledGallery,
  ImagesContainer,
  GalleryContainer,
} from "./gallery.styled.js";

const Gallery = () => {
  const [images, setImages] = useState(null);

  const [category, setCategory] = useState(null);

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

  const fetchByCategory = async (category) => {
    let images = [];

    await sanityClient
      .fetch(`*[_type=='galleryImage' && category=='${category}' ]`)
      .then((res) => {
        return res.map((item) => {
          return item.images.map((item) => {
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

    if (category === null || category === "all") fetchAll();
    else fetchByCategory(category);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [category]);

  return (
    <GalleryContainer>
      {isMobile ? (
        <MobileMenu isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
      ) : (
        <Menu setCategory={setCategory} />
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

export default Gallery;
