import * as S from "./styles";
import { Container } from "../Container";
import { Subtitle } from "../Subtitle";
import { EducationComponent } from "./EducationComponent";
import { ExperienceComponent } from "./ExperienceComponent";
import { CoursesComponent } from "./CoursesComponent";
import { TechnologiesComponent } from "./TechnologiesComponent";

export const Skills = () => {
	return (
		<S.Skills aria-label="Formação" id="formacao">
			<Container>
				<Subtitle>Formação</Subtitle>
				<S.SkillGrid>
					<S.SkillItem>
						<EducationComponent />
					</S.SkillItem>
					<S.SkillItem>
						<ExperienceComponent />
					</S.SkillItem>
					<S.SkillItem>
						<CoursesComponent />
					</S.SkillItem>
					<S.SkillItem>
						<TechnologiesComponent />
					</S.SkillItem>
				</S.SkillGrid>
			</Container>
		</S.Skills>
	);
};
