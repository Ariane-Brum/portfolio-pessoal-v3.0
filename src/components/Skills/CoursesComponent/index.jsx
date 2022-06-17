import * as S from "./styles";
import decY from "/dec/decYm.svg";
import { CoursesItem } from "./CoursesItem";
import { FaBook } from "react-icons/fa";
import { dataCourses } from "../../helpers/data";

export const CoursesComponent = () => {
  return (
    <>
      <S.DecY src={decY} width="10" height="302" alt="" />

      <h3>
        <FaBook color="#ffbb00" />
        Cursos/especializações
      </h3>
      <S.Courses data-aos="fade-up">
        {dataCourses.map((course) => (
          <CoursesItem
            courseName={course.courseName}
            courseTime={course.courseTime}
            key={course.id}
          />
        ))}
      </S.Courses>
    </>
  );
};
