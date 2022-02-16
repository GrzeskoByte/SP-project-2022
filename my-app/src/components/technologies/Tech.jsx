import React from "react";

import { StyledTech, StyledCard } from "./tech.styled";

const Tech = () => {
  const texts = {
    autoCad: `AutoCAD® to oprogramowanie do projektowania komputerowego (CAD), przy użyciu którego architekci, inżynierowie i specjaliści w dziedzinie budownictwa tworzą dokładne rysunki 2D i 3D.`,
    revit: `Program Revit® umożliwia zwiększenie wydajności pracy i dokładności w całym cyklu rozwojowym projektu — od projektowania koncepcyjnego, wizualizacji i analizy po produkcję i konstrukcję w technologi`,
    cadSis:
      "Zestaw programów wspomagających projektowanie. Obliczenia statyki wytrzymałości obiektów.",
  };

  return (
    <StyledTech>
      <Card title="AutoCad" content={texts.autoCad} />
      <Card title="Revit" content={texts.autoCad} />
      <Card title="CadSis" content={texts.autoCad} />
    </StyledTech>
  );
};

const Card = (props) => {
  const { title, content } = props;
  return (
    <StyledCard>
      <h2>{title}</h2>
      <p>{content}</p>
      <a href="#">
        <button>Więcej</button>
      </a>
    </StyledCard>
  );
};
export default Tech;
