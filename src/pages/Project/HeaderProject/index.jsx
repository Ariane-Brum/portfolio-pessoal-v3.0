import * as S from "./styles";
import logo from "/logo.svg";
import { Container } from "../../../components/Container";

export const HeaderProject = () => {
  return (
    <S.HeaderProject>
      <Container>
        <S.HeaderWrapper>
          <S.HeaderLogo to="/">
            <img src={logo} alt="Logo do meu site" width={157} height={33} />
          </S.HeaderLogo>
        </S.HeaderWrapper>
      </Container>
    </S.HeaderProject>
  );
};
