import React, { useEffect } from "react";
import styles from "./Skills.module.scss";
import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiNodejsSmall,
  DiPostgresql,
} from "react-icons/di";
import {
  SiExpress,
  SiPostgresql,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  // if (!props.data) return null;

  // const { project, github, name, description } = props.data
  useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);
  return (
    <div className={styles.skills}>
      <h2>My Skills:</h2>
      <div className={styles.scroll}>
        <div>
          <span className={styles.html}>
            <p className={styles.icon}>
              <FaHtml5 />
            </p>
            <p>HTML</p>
          </span>
          <span className={styles.css}>
            <p className={styles.icon}>
              <FaCss3 />
            </p>{" "}
            <p>CSS</p>
          </span>
          <span className={styles.sass}>
            <p className={styles.icon}>
            <FaSass />
            </p>{" "}
            <p>Sass</p>
          </span>
          <span className={styles.tailwind}>
            <p className={styles.icon}>
              <SiTailwindcss />
            </p>
            <p>TailwindCSS</p>
          </span>
          <span className={styles.javascript}>
            <p className={styles.icon}>
              <DiJsBadge />
            </p>
            <p>JavaScript</p>
          </span>
          <span className={styles.typescript}>
            <p className={styles.icon}>
              <SiTypescript />
            </p>
            <p>TypeScript</p>
          </span>
          <span className={styles.react}>
            <p className={styles.icon}>
              <FaReact />
            </p>
            <p>ReactJS</p>
          </span>
          <span className={styles.node}>
            <p className={styles.icon}>
              <FaNodeJs />
            </p>
            <p>NodeJS</p>
          </span>
          <span className={styles.express}>
            <p className={styles.icon}>
              <SiExpress />
            </p>
            <p>ExpressJS</p>
          </span>
          <span className={styles.postgre}>
            <p className={styles.icon}>
              <SiPostgresql />
            </p>
            <p>PostgreSQL</p>
          </span>
        </div>
        <div>
        <span className={styles.html}>
          <p className={styles.icon}><FaHtml5 /></p><p>HTML</p> 
          </span>
          <span className={styles.css}>
          <p className={styles.icon}><FaCss3 /></p> <p>CSS</p> 
          </span>
          <span className={styles.sass}>
            <p className={styles.icon}>
            <FaSass />
            </p>{" "}
            <p>Sass</p>
          </span>
          <span className={styles.tailwind}>
            <p className={styles.icon}>
              <SiTailwindcss />
            </p>
            <p>TailwindCSS</p>
          </span>
          <span className={styles.javascript}>
            <p className={styles.icon}>
              <DiJsBadge />
            </p>
            <p>JavaScript</p>
          </span>
          <span className={styles.typescript}>
            <p className={styles.icon}>
              <SiTypescript />
            </p>
            <p>TypeScript</p>
          </span>
          <span className={styles.react}>
            <p className={styles.icon}>
              <FaReact />
            </p>
            <p>ReactJS</p>
          </span>
          <span className={styles.node}>
            <p className={styles.icon}>
              <FaNodeJs />
            </p>
            <p>NodeJS</p>
          </span>
          <span className={styles.express}>
            <p className={styles.icon}>
              <SiExpress />
            </p>
            <p>ExpressJS</p>
          </span>
          <span className={styles.postgre}>
            <p className={styles.icon}>
              <SiPostgresql />
            </p>
            <p>PostgreSQL</p>
          </span>
        </div>
      </div>
      <div className={styles.skillsList}>
        <ul className={styles.front} data-aos="fade-right">
          <h3>Frontend</h3>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>Tailwind css</li>
          <li>Sass</li>
        </ul>
        <ul className={styles.back} data-aos="fade-left">
        <h3>Backend</h3>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PostgreSQL</li>
          <li>Ethereum</li>
          <li>Web3.js</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
