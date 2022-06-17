import * as S from "./styles";

export const TechnologieItem = ({ icon, techName }) => {
  return (
    <S.TechnologieItem>
      {icon}
      <span>{techName}</span>
    </S.TechnologieItem>
  );
};
