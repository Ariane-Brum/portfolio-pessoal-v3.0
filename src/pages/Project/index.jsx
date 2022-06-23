import * as S from "./styles";
import { useEffect, lazy, Suspense } from "react";
import { Container } from "../../components/Container";
import { useParams } from "react-router-dom";
import { HeaderProject } from "./HeaderProject";
import { ProjectInfo } from "./ProjectInfo";
import { OtherProjects } from "./OtherProjects";
import { Subtitle } from "../../components/Subtitle";
import { Loading } from "../../components/helpers/Loading";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { useProject } from "../../hooks/useProject";
import useMedia from "../../hooks/useMedia";
import { useState } from "react";
import firebase from "../../services/firebase";
import Head from "../../components/helpers/Head/Head";

const ProjectSlide = lazy(() => import("./ProjectSlide"));

const Project = () => {
  const { projectList } = useProject();
  const [singleProject, setSingleProject] = useState([]);
  const { id } = useParams();
  const tablet = useMedia("(max-width: 61.938rem)");

  useEffect(() => {
    const getSingleProject = () => {
      const docRef = firebase.firestore().collection("projetos").doc(id);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            setSingleProject(doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };
    getSingleProject();
  }, [id]);

  const links = projectList.filter((link) => {
    return link.id !== id;
  });

  return (
    <S.ProjectContainer id="top">
      <HeaderProject />

      <Container>
        <S.Project>
          {singleProject.length !== 0 && (
            <Suspense fallback={<Loading />}>
              <Head
                title={singleProject.title}
                description={singleProject.description}
              />
              <S.ProjectSpan>Projeto</S.ProjectSpan>
              <Subtitle>{singleProject.title}</Subtitle>
              <S.GridContainer>
                {tablet ? (
                  <S.ProjectWrapper>
                    <ProjectSlide singleProject={singleProject} />
                    <ProjectInfo singleProject={singleProject} />
                    <OtherProjects links={links} />
                    <S.Up href="#top" aria-label="Ir para o topo da página">
                      <BsArrowUpSquareFill size={30} color="#ffbb00" />
                    </S.Up>
                  </S.ProjectWrapper>
                ) : (
                  <>
                    <S.ProjectWrapper>
                      <ProjectSlide singleProject={singleProject} />
                      <OtherProjects links={links} />
                    </S.ProjectWrapper>
                    <ProjectInfo singleProject={singleProject} />
                  </>
                )}
              </S.GridContainer>
            </Suspense>
          )}
        </S.Project>
      </Container>
    </S.ProjectContainer>
  );
};

export default Project;
