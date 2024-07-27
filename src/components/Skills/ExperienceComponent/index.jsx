import * as S from "./styles";
import decXP from "/dec/decXp.svg";
import { ExperienceItem } from "./ExperienceItem";
import { FaBriefcase } from "react-icons/fa";

export const ExperienceComponent = () => {
  return (
    <>
			<h3>
				<FaBriefcase color="#ffbb00" />
				Experiência
			</h3>
      <S.Experience data-aos="fade-down">
        <S.Experience data-aos="flip-left">
        	<ExperienceItem
						experienceCompany="Vinci Shoes"
						experienceOffice="Estagiária em Desenvolvimento Web"
						experienceYear="2022 - 2023 · 8 meses"
        	/>
        	<ExperienceItem
						experienceCompany="WebGlobal"
						experienceOffice="Desenvolvedora Web Júnior"
						experienceYear="2023 - 2024 - Atual · 1 ano 5 meses"
        	/>
      	</S.Experience>
      </S.Experience>
      <S.DecX src={decXP} width="586" height="10" alt="" />
    </>
  );
};
