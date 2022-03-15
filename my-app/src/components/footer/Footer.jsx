import React from "react";

import { StyledFooter } from "./footer.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="links">
        <a name="footer">
          <ul>
            <li>Polityka prywatności</li>
            <li>FAQ</li>
          </ul>
        </a>
      </div>

      <ContactList />
    </StyledFooter>
  );
};

const ContactList = () => {
  return (
    <div className="contact">
      <ul>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faPhone}
            color="white"
            style={{ margin: "0 5px" }}
          />
          +48 793 016 774
        </li>
        <li>
          <FontAwesomeIcon
            icon={faHome}
            color="white"
            style={{ margin: "0 5px" }}
          />
          Starogard Gdański ul.Hallera 13
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            color="white"
            style={{ margin: "0 5px" }}
          />
          piotr@spprojekt.eu LUB agnieszka@spprojekt.eu
        </li>
      </ul>
    </div>
  );
};

export default Footer;
