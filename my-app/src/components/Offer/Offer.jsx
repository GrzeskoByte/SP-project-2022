import React from "react";
import { StyledOffer } from "./offer.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const Offer = () => {
  return (
    <StyledOffer name="offer">
      <div id="firstOfferSec">
        <a name="offer"></a>
        <ul>
          <li>
            <h2>Nasza Oferta</h2>
          </li>
          <li>
            - projekty budynków mieszkalnych jednorodzinnych, wielorodzinnych,
            usługowych, użyteczności publicznej, produkcyjnych, itp.
          </li>
          <li>
            {" "}
            - adaptacje projektów typowych (katalogowych) do warunków
            miejscowych, wraz z ewentualnymi zmianami w projekcie
          </li>
          <li>
            {" "}
            - projekty rozbudowy i przebudowy budynków -projekty rozbiórki
            budynków
          </li>
          <li>- inwentaryzacje budynków</li>
          <li>- projekty przyłączy </li>
          <li>- uzyskiwanie zmiany sposobu użytkowania budynków </li>
          <li>- wizualizację przestrzenne budynków </li>
        </ul>
      </div>
      <div id="secondOfferSec">
        <FontAwesomeIcon
          icon={faListCheck}
          color="white"
          style={{ fontSize: "20rem" }}
        />
      </div>
    </StyledOffer>
  );
};

export default Offer;
