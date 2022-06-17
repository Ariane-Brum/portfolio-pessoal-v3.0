import * as S from "./styles";
import { FaCheck } from "react-icons/fa";

export const Features = ({ singleProject }) => {
  return (
    <S.Features>
      {singleProject.features.map((feature) => (
        <li key={feature}>
          {feature} <FaCheck color="#ffbb00" />
        </li>
      ))}
    </S.Features>
  );
};
