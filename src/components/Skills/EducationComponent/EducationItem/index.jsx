import * as S from "./styles";

export const EducationItem = ({ courseType, institution, courseName }) => {
  return (
    <S.EducationItem>
      <span>{courseType}</span>
      <h4>{courseName}</h4>
      <span>{institution}</span>
    </S.EducationItem>
  );
};
