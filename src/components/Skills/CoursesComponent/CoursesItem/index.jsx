import * as S from "./styles";

export const CoursesItem = ({ courseName, courseTime }) => {
  return (
    <S.CoursesItem>
      {courseName} <span>{courseTime}</span>
    </S.CoursesItem>
  );
};
