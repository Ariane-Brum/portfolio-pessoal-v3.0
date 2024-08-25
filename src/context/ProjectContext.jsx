import { createContext, useEffect, useState } from "react";
import firebase from "../services/firebase";

export const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
	const [projectList, setProjectList] = useState([]);
	const [singleProject, setSingleProject] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getProjectList = async () => {
			try {
				const projects = await firebase.firestore().collection("projetos").get();
				const data = projects.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setProjectList(data);
			} catch (err) {
				console.log(err.message);
			}
		};
		getProjectList();
	}, []);

	const getSingleProject = async (id)=> {
		setLoading(true);

		try {
			const docRef = await firebase.firestore().collection("projetos").doc(id).get();
			if (docRef.exists) {
				setSingleProject(docRef.data());
			} else {
				console.log("No such document!");
				setSingleProject(null);
			}
		} catch (error) {
			console.log("Error fetching document:", error);
			setSingleProject(null);
		} finally {
			setLoading(false);
		}
	};

	return (
		<ProjectContext.Provider
			value={{
				projectList,
				singleProject,
				loading,
				getSingleProject,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};