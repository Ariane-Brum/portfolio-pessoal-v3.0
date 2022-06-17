import * as S from "./styles";
import logo from "/logo.svg";
import { Container } from "../Container";
import { FaGithubSquare, FaLinkedin, FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterGrid>
          <S.FooterLogo>
            <img src={logo} alt="Logo do meu site" width={157} height={33} />
          </S.FooterLogo>
          <S.FooterContact>
            <h3>Contato</h3>
            <S.ContactList>
              <li>
                <a href="tel:+5551981265688">+55 51 9812-65688</a>
              </li>
              <li>
                <a href="mailto:arianebrum27@gmail.com">
                  arianebrum27@gmail.com
                </a>
              </li>
              <li>Porto Alegre - Partenon</li>
              <li>Rio Grande do Sul - RS</li>
            </S.ContactList>
          </S.FooterContact>
          <S.FooterSocial>
            <h3>Redes Sociais</h3>
            <S.SocialList>
              <a
                href="https://github.com/Ariane-Brum"
                target="_blank"
                aria-label="Link para o meu Github"
                rel="noreferrer"
              >
                <FaGithubSquare color="#ffbb00" size={41} />
              </a>
              <a
                href="https://www.linkedin.com/in/ariane-brum-dos-santos/"
                target="_blank"
                aria-label="Link para o meu Linkedin"
                rel="noreferrer"
              >
                <FaLinkedin color="#ffbb00" size={40} />
              </a>
            </S.SocialList>
          </S.FooterSocial>
        </S.FooterGrid>
        <p>
          Criado com amor <FaHeart color="#ffbb00" /> por Ariane Brum
        </p>
      </Container>
    </S.Footer>
  );
};
