import * as S from "./styles";
import introImg from "/img-introducao.avif";
import { Container } from "../Container";
import { Typewriter } from "../Typewriter";
import { FaFileDownload } from "react-icons/fa";

export const Intro = () => {
	return (
		<S.Intro aria-label="Introdução" id="home">
			<Container>
				<S.IntroWrapper>
					<S.IntroContent>
						<S.IntroName data-aos="fade-down">
							<span>Olá, eu sou</span>
							<S.Title>
								Ariane Brum<span>.</span>
							</S.Title>
							<Typewriter value="Desenvolvedora Front-end." />
						</S.IntroName>
						<S.IntroCv>
							<a
								href="https://drive.google.com/file/d/1Xn5-P6iestgZUbPrMCcM5lBhISCgquch/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
							>
								<FaFileDownload size={16} /> Download CV
							</a>
						</S.IntroCv>
					</S.IntroContent>
					<S.IntroImg>
						<img
							src={introImg}
							alt="Foto de Ariane Brum"
							width={350}
							height={368}
						/>
					</S.IntroImg>
				</S.IntroWrapper>
			</Container>
		</S.Intro>
	);
};
