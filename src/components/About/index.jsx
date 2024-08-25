import * as S from "./styles";
import gifImage from "/ariane.gif";
import { Container } from "../Container/styles";
import { Subtitle } from "../Subtitle";
import { AboutIcon } from "./AboutIcon";
import { dataIcons } from "../helpers/data";

export const About = () => {
	return (
		<S.About id="quem-sou">
			<Container>
				<S.AboutWrapper>
					<S.AboutImg>
						<img
							src={gifImage}
							width="600"
							height="600"
							alt="Gif de uma menina piscando."
						/>
						{dataIcons.map((icon) => (
							<AboutIcon key={icon.id} Icon={icon.icon} name={icon.name} />
						))}
					</S.AboutImg>
					<S.AboutContent>
						<Subtitle>Quem sou</Subtitle>
						<p data-aos="fade-down">
							Olá! Sou formada em Análise e Desenvolvimento de Sistemas e trabalho como Programadora Web na WebGlobal. Sou apaixonada pelo desenvolvimento web, especialmente no <strong>Front-end</strong>, e estou sempre aprendendo novas tecnologias.
						</p>
						<p data-aos="fade-down" data-aos-delay="80">
							Tenho conhecimentos em <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>VueJS</strong>, <strong>Bootstrap</strong>, <strong>Tailwind</strong> e <strong>WordPress</strong>. Nas horas livres, estudo novas linguagens e tendências da área para me manter atualizada.
						</p>
						<p data-aos="fade-down" data-aos-delay="160">
							Sou alegre, comunicativa e trabalho bem em equipe, colaborando efetivamente com designers e desenvolvedores para criar interfaces intuitivas e responsivas. Estou sempre em busca de expandir meus conhecimentos e contribuir para projetos desafiadores no desenvolvimento web.
						</p>
					</S.AboutContent>
				</S.AboutWrapper>
			</Container>
		</S.About>
	);
};
