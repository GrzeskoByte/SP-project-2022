import React, { useState, useEffect } from "react";

import img1 from "../../images/i18.jpg";
import img2 from "../../images/i4.jpg";
import img3 from "../../images/i6.jpg";

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

  useEffect(() => {
    if (window.innerWidth < 530) {
      setIsVisible(false);
    } else setIsVisible(true);

    window.addEventListener("resize", () => {
      if (window.innerWidth < 530) {
        setIsVisible(false);
      } else setIsVisible(true);
    });

    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  return <>{isVisible ? <DesktopHeader /> : <MobileHeader />}</>;
};

const DesktopHeader = () => {
  return (
    <StyledHeader>
      <HeaderItem
        imgUrl={img1}
        heading={"Dom jednorodzinny"}
        tags={{ tagOne: "Starogard Gdański", tagTwo: "6.08.2020" }}
      />
      <HeaderItem
        imgUrl={img2}
        heading={"Dom wielorodzinny"}
        tags={{ tagOne: "Płaczewo", tagTwo: "12.01.2021" }}
      />
      <HeaderItem
        imgUrl={img3}
        heading={"Restauracje i obiekty rekreacyjne"}
        tags={{ tagOne: "Żabno", tagTwo: "02.01.2022" }}
      />
    </StyledHeader>
  );
};

const MobileHeader = () => {
  return (
    <>
      <StyledMobileHeader img={img1}>
        <h2>Zbadaj ofertę</h2>
      </StyledMobileHeader>
    </>
  );
};

const HeaderItem = (props) => {
  const { imgUrl, heading, tags } = props;

  return (
    <>
      <HeaderCard img={imgUrl}>
        <Tags>
          <div>{tags.tagOne}</div>
          <div>
            {tags.tagTwo} <FontAwesomeIcon icon={faCalendar} />
          </div>
        </Tags>
        <h3>{heading}</h3>
      </HeaderCard>
    </>
  );
};

export default Header;
