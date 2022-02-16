import React from "react";

import { StyledFooter } from "./footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="links">
        <ul>
          <li>Polityka prywatności</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="contact">
        <ul>
          <li>+48 793 016 774</li>
          <li>Starogard Gdański ul.Hallera 13</li>
          <li>piotr@spprojekt.eu LUB agnieszka@spprojekt.eu</li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
