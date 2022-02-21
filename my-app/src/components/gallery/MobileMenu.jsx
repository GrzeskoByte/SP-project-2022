import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { MenuMobile, OpenMobileNav } from "./gallery.styled.js";

const MobileMenu = (props) => {
  const { isOpen, setIsOpen } = props;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuMobile>
      <h1>
        <span style={{ color: "green" }}>SP </span>PROJEKT
      </h1>
      <div className="menuIcon">
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="bar"
          onClick={handleClick}
        />
      </div>

      {isOpen ? (
        <OpenMobileNav>
          <ul>
            <li>Wszystko</li>
            <li>Jednorodzinne</li>
            <li>Wielorodzinne</li>
            <li>Użyteczności publicznej</li>
            <li>Usługowe</li>
            <li>
              <a href="/">Powrót</a>
            </li>
          </ul>
        </OpenMobileNav>
      ) : (
        ""
      )}
    </MenuMobile>
  );
};

export default MobileMenu;
