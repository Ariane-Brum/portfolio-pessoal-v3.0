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
              {" "}
              Me chamo Ariane, amo solucionar problemas através dos códigos.
              Estou em transição de carreira, atualmente estudando{" "}
              <strong>Análise e desenvolvimento de sistemas</strong>.
            </p>

            <p data-aos="fade-down" data-aos-delay="80">
              Busco uma oportunidade na área de desenvolvimento web com o
              objetivo de obter experiências e vivencias e aprimorar meu
              desenvolvimento profissional e pessoal.
            </p>
          </S.AboutContent>
        </S.AboutWrapper>
      </Container>
    </S.About>
  );
};
