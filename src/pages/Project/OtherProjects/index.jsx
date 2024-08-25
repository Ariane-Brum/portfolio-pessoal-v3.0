import * as S from "./styles";
import { Link } from "react-router-dom";

export const OtherProjects = ({ links }) => {
	return (
		<S.OtherProjects>
			<h3>Outros Projetos</h3>
			<S.NavigationProjects>
				<ul>
					{links.map((link) => (
						<li key={link.id}>
							<Link to={`/project/${link.id}`}>{link.title}</Link>
						</li>
					))}
					<li>
						<Link to="/">Voltar para a Home</Link>
					</li>
				</ul>
			</S.NavigationProjects>
		</S.OtherProjects>
	);
};
