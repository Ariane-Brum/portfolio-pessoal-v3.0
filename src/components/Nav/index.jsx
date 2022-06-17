import * as S from "./styles";
import { liValues } from "../helpers/data";

export const Nav = () => {
  return (
    <S.Nav>
      <S.Menu>
        {liValues.map((value) => (
          <li key={value.id}>
            <S.Anchor
              activeClass="active"
              to={value.idLink}
              spy={true}
              smooth={true}
              offset={-84}
              duration={500}
            >
              {value.text}
            </S.Anchor>
          </li>
        ))}
      </S.Menu>
    </S.Nav>
  );
};
