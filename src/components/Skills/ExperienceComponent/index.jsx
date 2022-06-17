import * as S from "./styles";
import decXP from "/dec/decXp.svg";
import { FaBriefcase } from "react-icons/fa";

export const ExperienceComponent = () => {
  return (
    <>
      <S.Experience data-aos="fade-down">
        <h3>
          <FaBriefcase color="#ffbb00" />
          Experiência
        </h3>
        <p>
          Estou sempre em busca de melhores práticas e também em busca de
          aprender/experimentar novas tecnologias. Minhas experiências atuais
          são os projetos pessoais que fiz, e os que ainda estou desenvolvendo.
          Eles podem ser encontrados no meu{" "}
          <a
            href="https://github.com/Ariane-Brum"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </S.Experience>
      <S.DecX src={decXP} width="495" height="10" alt="" />
    </>
  );
};
