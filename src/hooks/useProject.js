import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export const useProject = () => {
  const value = useContext(ProjectContext);
  return value;
};
