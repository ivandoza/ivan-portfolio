import {
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";

export const dataSlider = [
  {
    icon: <FaHtml5 />,
    text: "HTML",
    class: "styles.html",
  },
  {
    icon: <FaCss3 />,
    text: "CSS",
    class: "styles.css",
  },
  {
    icon: <FaSass />,
    text: "Sass",
    class: "styles.sass",
  },
  {
    icon: <SiTailwindcss />,
    text: "TailwindCSS",
    class: "styles.tailwind",
  },
  {
    icon: <DiJsBadge />,
    text: "JavaScript",
    class: "styles.javascript",
  },
  {
    icon: <SiTypescript />,
    text: "TypeScript",
    class: "styles.typescript",
  },
  {
    icon: <FaReact />,
    text: "ReactJS",
    class: "styles.react",
  },
  {
    icon: <FaNodeJs />,
    text: "NodeJS",
    class: "styles.node",
  },
  {
    icon: <SiExpress />,
    text: "ExpressJS",
    class: "styles.express",
  },
  {
    icon: <SiPostgresql />,
    text: "PostgreSQL",
    class: "styles.postgre",
  },
];
