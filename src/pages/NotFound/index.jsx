import * as S from "./styles";
import { Container } from "../../components/Container";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <S.MainContainer>
      <Container>
        <S.Title>
          Error: 404<span>.</span>
        </S.Title>
        <p>Página não encontrada!</p>
        <Link to="/">Voltar para Home</Link>
      </Container>
    </S.MainContainer>
  );
};
