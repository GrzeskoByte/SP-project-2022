import React, { useState } from "react";

import { StyledTech, StyledCard, StyledButton } from "./tech.styled";

import Modal from "../Modal/Modal";

const Tech = () => {
  const texts = {
    autoCad: `AutoCAD® to oprogramowanie do projektowania komputerowego (CAD), przy użyciu którego architekci, inżynierowie i specjaliści w dziedzinie budownictwa tworzą dokładne rysunki 2D i 3D.`,
    revit: `Program Revit® umożliwia zwiększenie wydajności pracy i dokładności w całym cyklu rozwojowym projektu — od projektowania koncepcyjnego, wizualizacji i analizy po produkcję i konstrukcję w technologi`,
    cadSis:
      "Zestaw programów wspomagających projektowanie. Obliczenia statyki wytrzymałości obiektów.",
  };

  const links = {
    autoCad:
      "https://pl.wizcase.com/wp-content/uploads/2020/11/AutoCAD-Logo.png",
    revit:
      "https://cdn.myshoptet.com/usr/eshop.adeon.cz/user/shop/big/144-14_autodesk-revit-cena-licence-pronajem.jpg?6006abb5",
    cadSis: "https://www.cadsis.pl/imgs/logo.svg?v=202107121946",
  };

  return (
    <StyledTech>
      <Card title="AutoCad" content={texts.autoCad} link={links.autoCad} />
      <Card title="Revit" content={texts.autoCad} link={links.revit} />
      <Card title="CadSis" content={texts.autoCad} link={links.cadSis} />
    </StyledTech>
  );
};

const Card = ({ title, content, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClose = () => setIsModalOpen(false);

  const handleModal = () => setIsModalOpen((state) => !state);

  return (
    <StyledCard>
      <h2>{title}</h2>
      <p>{content}</p>

      <StyledButton onClick={handleModal}>Więcej</StyledButton>

      <Modal
        handleOnClose={handleOnClose}
        isOpen={isModalOpen}
        shouldBeCloseOnOutsideClick={true}
      >
        <div className="content">
          <img src={link} alt="AutoCad Logo" />
          <p>{content}</p>
          <button>Strona producenta</button>
        </div>
      </Modal>
    </StyledCard>
  );
};
export default Tech;
