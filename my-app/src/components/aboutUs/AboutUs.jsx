import React from "react";
import { StyledAboutUs } from "./aboutUs.styled";

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <div className="firstOfferSec"></div>
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
