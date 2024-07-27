import * as S from "./styles";

export const ExperienceItem = ({ experienceCompany, experienceOffice, experienceYear }) => {
  return (
    <S.ExperienceItem>
      <span>{experienceCompany}</span>
      <h4>{experienceOffice}</h4>
      <span>{experienceYear}</span>
    </S.ExperienceItem>
  );
};