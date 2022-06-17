import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  FaUserAlt,
  FaFolderOpen,
  FaGraduationCap,
  FaHome,
} from "react-icons/fa";

import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiSass,
  SiGithub,
  SiGit,
  SiBootstrap,
} from "react-icons/si";

export const dataIcons = [
  { id: 0, icon: IoLogoJavascript, name: "iconJS" },
  { id: 1, icon: IoLogoHtml5, name: "iconHTML" },
  { id: 2, icon: IoLogoCss3, name: "iconCSS" },
];

export const liValues = [
  { id: 0, text: "Home", icon: FaHome, idLink: "home" },
  {
    id: 1,
    text: "Quem sou",
    icon: FaUserAlt,
    idLink: "quem-sou",
  },
  { id: 2, text: "Projetos", icon: FaFolderOpen, idLink: "projetos" },
  { id: 3, text: "Formação", icon: FaGraduationCap, idLink: "formacao" },
];

export const dataCourses = [
  { id: 0, courseName: "Web Design Completo", courseTime: "44h" },
  { id: 1, courseName: "CSS com Sass", courseTime: "12h" },
  { id: 2, courseName: "React Completo", courseTime: "36h" },
  { id: 3, courseName: "Front-end do Zero ao Profissional", courseTime: "36h" },
  { id: 4, courseName: "HTML e CSS para Iniciantes", courseTime: "23h" },
  { id: 5, courseName: "JavaScript Completo ES6", courseTime: "74h" },
  { id: 6, courseName: "Automação Front-end com NPM", courseTime: "8h" },
];

export const dataTechs = [
  { id: 0, icon: SiHtml5, techName: "HTML5" },
  { id: 1, icon: SiCss3, techName: "CSS3" },
  { id: 2, icon: SiJavascript, techName: "Javascript" },
  { id: 3, icon: SiReact, techName: "ReactJs" },
  { id: 4, icon: SiGithub, techName: "Github" },
  { id: 5, icon: SiGit, techName: "Git" },
  { id: 6, icon: SiSass, techName: "Sass" },
  { id: 7, icon: SiBootstrap, techName: "Bootstrap" },
];
