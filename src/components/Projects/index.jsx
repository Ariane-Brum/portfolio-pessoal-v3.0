import * as S from "./styles";
import { Container } from "../Container";
import { Subtitle } from "../Subtitle";
import { ProjectItem } from "./ProjectItem";
import { useProject } from "../../hooks/useProject";

export const Projects = () => {
	const { projectList } = useProject();

	return (
		<S.Projects id="projetos">
			<Container>
				<Subtitle>Projetos</Subtitle>
				<S.Project>
					{projectList && projectList.map((project) => (
						<ProjectItem key={project.id} project={project} /> // Render each project item
					))}
				</S.Project>
			</Container>
		</S.Projects>
	);
};
