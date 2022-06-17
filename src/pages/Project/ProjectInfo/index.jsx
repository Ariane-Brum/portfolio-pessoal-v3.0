import * as S from "./styles";
import { Features } from "../Features";
import { Techs } from "../Techs";
import { FaTools } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const ProjectInfo = ({ singleProject }) => {
  return (
    <S.ProjectContent>
      <h3>Informações do projeto</h3>
      <p>{singleProject.description}</p>
      <S.ProjectLink>
        <S.LinkItem>
          <a href={singleProject.externalLink} target="_blank" rel="noreferrer">
            <FiExternalLink />
            Veja o projeto
          </a>
        </S.LinkItem>
        <S.LinkItem>
          <a href={singleProject.githubLink} target="_blank" rel="noreferrer">
            <FiGithub />
            Link do repositório no Github
          </a>
        </S.LinkItem>
      </S.ProjectLink>
      <h4>
        <FaTools size={14} color="#ffbb00" />
        Tecnologias
      </h4>
      <Techs singleProject={singleProject} />
      <h4>
        <HiSparkles size={16} color="#ffbb00" />
        Funcionalidades
      </h4>
      <Features singleProject={singleProject} />
    </S.ProjectContent>
  );
};
