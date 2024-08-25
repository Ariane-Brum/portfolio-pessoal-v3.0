import * as S from "./styles";
import decY from "/dec/decYm.svg";
import decXP from "/dec/decXp.svg";
import { EducationItem } from "./EducationItem";
import { FaUserGraduate } from "react-icons/fa";

export const EducationComponent = () => {
	return (
		<>
			<S.DecY src={decY} width="10" height="302" alt="" />
			<h3>
				<FaUserGraduate color="#ffbb00" />
				Educação
			</h3>
			<S.Education data-aos="flip-left">
				<EducationItem
					courseType="Tecnólogo"
					institution="FAQI (Concluído)"
					courseName="Análise e desenvolvimento de sistemas"
				/>
				<EducationItem
					courseType="Técnico"
					institution="Col. Protásio Alves"
					courseName="Curso técnico informática para internet"
				/>
			</S.Education>
			<S.DecX src={decXP} width="586" height="10" alt="" />
		</>
	);
};
