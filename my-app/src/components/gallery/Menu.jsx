import { NavLink } from "react-router-dom";

import { GalleryMenu } from "./gallery.styled.js";

const Menu = (props) => {
  const { setCategory } = props;

  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <GalleryMenu>
      <nav>
        <ul>
          <li>
            <h1>
              <span>SP</span> PROJEKT
            </h1>
          </li>
          <li onClick={() => handleClick("all")}>Wszystko</li>
          <li onClick={() => handleClick("jednorodzinny")}>Jednorodzinne</li>
          <li onClick={() => handleClick("wielorodzinny")}>Wielorodzinne</li>
          <li onClick={() => handleClick("uslugi")}>Usługowe</li>
          <li onClick={() => handleClick("biurowy")}>Biurowy</li>
          <li onClick={() => handleClick("letniskowy")}>Letniskowy</li>

          <li>
            <NavLink to="/">Powrót</NavLink>
          </li>
        </ul>
      </nav>
    </GalleryMenu>
  );
};

export default Menu;
