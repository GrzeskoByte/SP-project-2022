import React, { useEffect, useRef, useState } from "react";
import { StyledAboutUs, FirstOfferSec } from "./aboutUs.styled";

import fetchByCategory from "../gallery/helpers/fetchByCategory";
import urlFor from "../gallery/helpers/urlFor";

const AboutUs = () => {
  const [images, setImages] = useState(null);
  const [captions, setCaptions] = useState(null);

  useEffect(() => {
    fetchByCategory("aboutUs", setImages, setCaptions);
  }, []);

  return (
    <StyledAboutUs>
      <FirstOfferSec
        className="firstOfferSec"
        img={images ? urlFor(images[0]).url() : null}
      ></FirstOfferSec>
      <div className="secondOfferSec">
        <h2>
          {" "}
          <a name="aboutUs">Twój architekt</a>
        </h2>

        <p>
          Jestem absolwentem Politechniki Gdańskiej. Projektowaniem zajmuję się
          od ponad 25 lat, własną działalność prowadzę od 4 lat. W tym czasie
          zaprojektowałem niezliczoną ilość obiektów budowlanych. Są to między
          innymi domy mieszkalne jednorodzinne i wielorodzinne, sklepy,
          restauracje, hotele, budynki przemysłowe i rolnicze. Na początku mojej
          pracy zawodowej projektowałem tylko i wyłącznie w technologii 2D.
          Obecnie po nabraniu doświadczenia i udoskonaleniu swoich umiejętności,
          projektuję głównie w technologii 3D. Dzięki temu klientowi łatwiej
          jest podjąć decyzję co do zaproponowanych rozwiązań.
        </p>
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
