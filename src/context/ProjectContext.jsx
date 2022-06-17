import { createContext, useEffect, useState } from "react";
import firebase from "../services/firebase";

export const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      try {
        const projects = await firebase
          .firestore()
          .collection("projetos")
          .get();
        const data = projects.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProjectList(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProjectList();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projectList,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
