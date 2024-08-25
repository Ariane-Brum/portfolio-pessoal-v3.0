import * as S from "./styles";

export const Techs = ({ singleProject }) => {
	return (
		<S.Techs>
			{singleProject.techs.map((tech) => (
				<li key={tech}>{tech}</li>
			))}
		</S.Techs>
	);
};
