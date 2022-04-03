import React, { useState, useEffect } from "react";

import fetchByCategory from "../gallery/helpers/fetchByCategory";
import urlFor from "../gallery/helpers/urlFor";

import {
  StyledHeader,
  HeaderCard,
  Tags,
  StyledMobileHeader,
} from "./header.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const [images, setImages] = useState(null);
  const [captions, setCaptions] = useState(null);

  useEffect(() => {
    fetchByCategory("header", setImages, setCaptions);

    const handleResize = () => {
      if (window.innerWidth < 530) {
        setIsVisible(false);
      } else setIsVisible(true);
    };

    if (window.innerWidth < 530) {
      setIsVisible(false);
    } else setIsVisible(true);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isVisible ? (
        images ? (
          <DesktopHeader images={images} />
        ) : null
      ) : images ? (
        <MobileHeader images={images} />
      ) : null}
    </>
  );
};

const DesktopHeader = ({ images }) => {
  return (
    <StyledHeader>
      <HeaderItem
        imgUrl={images[0]}
        heading={"Domy jednorodzinne"}
        tags={{ tagOne: "Starogard Gdański", tagTwo: "więcej" }}
      />
      <HeaderItem
        imgUrl={images[1]}
        heading={"Domy wielorodzinne"}
        tags={{ tagOne: "Starogard Gdański", tagTwo: "więcej" }}
      />
      <HeaderItem
        imgUrl={images[2]}
        heading={"Restauracje i obiekty usługowe"}
        tags={{ tagOne: "Płaczewo", tagTwo: "więcej" }}
      />
    </StyledHeader>
  );
};

const MobileHeader = ({ images }) => {
  return (
    <>
      <StyledMobileHeader img={urlFor(images[0]).url()}></StyledMobileHeader>
    </>
  );
};

const HeaderItem = (props) => {
  const { imgUrl, heading, tags } = props;

  return (
    <>
      <HeaderCard img={urlFor(imgUrl).url()}>
        <Tags>
          <div>{tags.tagOne}</div>
          {/* <div>
            {tags.tagTwo} <FontAwesomeIcon icon={faCalendar} />
          </div> */}
        </Tags>
        <h3>{heading}</h3>
      </HeaderCard>
    </>
  );
};

export default Header;
