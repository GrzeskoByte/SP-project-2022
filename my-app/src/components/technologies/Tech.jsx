import React from "react";

import { StyledTech, StyledCard } from "./tech.styled";

const Tech = () => {
  const texts = {
    autoCad: `AutoCAD® to oprogramowanie do projektowania komputerowego (CAD), przy użyciu którego architekci, inżynierowie i specjaliści w dziedzinie budownictwa tworzą dokładne rysunki 2D i 3D.`,
    revit: `Program Revit® umożliwia zwiększenie wydajności pracy i dokładności w całym cyklu rozwojowym projektu — od projektowania koncepcyjnego, wizualizacji i analizy po produkcję i konstrukcję w technologi`,
    cadSis:
      "Zestaw programów wspomagających projektowanie. Obliczenia statyki wytrzymałości obiektów.",
  };
  const links = {
    autoCad: `https://www.autodesk.pl/products/autocad/overview?panel=buy&term=1-YEAR&support=ADVANCED&quantity=1&mktvar002=4417848%7CSEM%7C%7Bcampaignid%7D%7C%7Badgroupid%7D%7C%7BTargetId%7D&ef_id=CjwKCAiApfeQBhAUEiwA7K_UH9vKPH6FwNpqWVc5LjDXu-ADl5h3M9Gjb1fZpz20FIuoKLk5cD5QIBoCGmIQAvD_BwE:G:s&s_kwcid=AL!11172!3!498598226599!e!!g!!autocad!12120156676!122095850128&mkwid=s|pcrid|498598226599|pkw|autocad|pmt|e|pdv|c|slid||pgrid|122095850128|ptaid|aud-640266691352:kwd-14891210|pid|&utm_medium=cpc&utm_source=google&utm_campaign=GGL_DEC_AutoCAD_EMEA_PL_eComm_SEM_BR_NA_MIX_ADSK_3360535_AutoCAD&utm_term=autocad&utm_content=s|pcrid|498598226599|pkw|autocad|pmt|e|pdv|c|slid||pgrid|122095850128|ptaid|aud-640266691352:kwd-14891210|&gclid=CjwKCAiApfeQBhAUEiwA7K_UH9vKPH6FwNpqWVc5LjDXu-ADl5h3M9Gjb1fZpz20FIuoKLk5cD5QIBoCGmIQAvD_BwE&tab=subscription`,
    revit: `https://www.autodesk.pl/products/revit/overview?mktvar002=4876071%7CSEM%7C%7Bcampaignid%7D%7C%7Badgroupid%7D%7C%7BTargetId%7D&panel=buy&ef_id=CjwKCAiApfeQBhAUEiwA7K_UH1UeA2i-FOY2J3QKCeZYTujpfRohbq6k-ilioKOjKts5eyPjv_NoAhoCi6YQAvD_BwE:G:s&s_kwcid=AL!11172!3!575992254126!e!!g!!revit%20autodesk!15944894083!132052489563&mkwid=s|pcrid|575992254126|pkw|revit%20autodesk|pmt|e|pdv|c|slid||pgrid|132052489563|ptaid|kwd-653771471|pid|&utm_medium=cpc&utm_source=google&utm_campaign&utm_term=revit%20autodesk&utm_content=s|pcrid|575992254126|pkw|revit%20autodesk|pmt|e|pdv|c|slid||pgrid|132052489563|ptaid|kwd-653771471|&gclid=CjwKCAiApfeQBhAUEiwA7K_UH1UeA2i-FOY2J3QKCeZYTujpfRohbq6k-ilioKOjKts5eyPjv_NoAhoCi6YQAvD_BwE&term=1-YEAR&tab=subscription`,
    cadSis: `https://www.cadsis.pl/`,
  };
  return (
    <StyledTech>
      <a name="techs"></a>
      <Card title="AutoCad" content={texts.autoCad} link={links.autoCad} />
      <Card title="Revit" content={texts.autoCad} link={links.revit} />
      <Card title="CadSis" content={texts.autoCad} link={links.cadSis} />
    </StyledTech>
  );
};

const Card = (props) => {
  const { title, content, link } = props;
  return (
    <StyledCard>
      <h2>{title}</h2>
      <p>{content}</p>
      <a href={link}>
        <button>Więcej</button>
      </a>
    </StyledCard>
  );
};
export default Tech;
