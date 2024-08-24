import { useEffect } from "react";
import { Intro } from "../../components/Intro";
import { About } from "../../components/About";
import { Projects } from "../../components/Projects";
import { Header } from "../../components/Header";
import { Skills } from "../../components/Skills";
import { Github } from "../../components/Github";
import Project from "../Project";

import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "../../components/Footer";
import Head from "../../components/helpers/Head/Head";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProject } from '../../hooks/useProject';

const Home = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const { id } = useParams();
	const { projectList } = useProject();
	const navigate = useNavigate();

	useEffect(() => {
		AOS.init({
			duration: 1500,
			once: true,
		});
	}, []);

  return (
    <>
      <Header />
      <main>
        <Head
          title="Home"
          description="Olá me chamo Ariane Brum, sou estudante de programação, em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
        />
        <Intro />
        <About />
				<Projects />
        <Skills />
				<Github />
      </main>
      <Footer />
    </>
  );
};

export default Home;
