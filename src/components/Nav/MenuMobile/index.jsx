import * as S from "./styles";
import { useState } from "react";
import { liValues } from "../../helpers/data";

export const MenuMobile = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <S.Navigation>
      <ul>
        {liValues.map((value) => (
          <S.Li
            onClick={() => setActiveId(value.id)}
            className={activeId === value.id ? "active" : undefined}
            key={value.id}
          >
            <a href={`#${value.idLink}`}>
              <S.Icon>{<value.icon />}</S.Icon>
              <S.Text>{value.text}</S.Text>
            </a>
          </S.Li>
        ))}
        <S.Indicator></S.Indicator>
      </ul>
    </S.Navigation>
  );
};
