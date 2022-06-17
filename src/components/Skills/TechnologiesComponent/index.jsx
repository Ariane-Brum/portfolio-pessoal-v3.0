import * as S from "./styles";
import { TechnologieItem } from "./TechnologieItem";
import { FaCode } from "react-icons/fa";
import { dataTechs } from "../../helpers/data";

export const TechnologiesComponent = () => {
  return (
    <>
      <h3>
        <FaCode color="#ffbb00" />
        Tecnologias
      </h3>
      <S.Technologies data-aos="flip-right">
        {dataTechs.map((tech) => (
          <TechnologieItem
            icon={<tech.icon color="#ffbb00" size={60} />}
            techName={tech.techName}
            key={tech.id}
          />
        ))}
      </S.Technologies>
    </>
  );
};
