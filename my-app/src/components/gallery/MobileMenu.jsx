import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { MenuMobile, OpenMobileNav } from "./gallery.styled.js";

const MobileMenu = (props) => {
  const { isOpen, setIsOpen, setCategory } = props;

  const handleToggler = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (category) => {
    setCategory(category);
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
          onClick={handleToggler}
        />
      </div>

      {isOpen ? (
        <OpenMobileNav>
          <ul>
            <li onClick={() => handleClick("all")}>Wszystko</li>
            <li onClick={() => handleClick("jednorodzinny")}>Jednorodzinne</li>
            <li onClick={() => handleClick("wielorodzinny")}>Wielorodzinne</li>
            <li onClick={() => handleClick("uslugi")}>Usługowe</li>
            <li onClick={() => handleClick("biurowy")}>Biurowy</li>
            <li onClick={() => handleClick("letniskowy")}>Letniskowy</li>
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
