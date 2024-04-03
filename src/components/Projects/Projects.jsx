import React, { useContext, useEffect } from "react";
import styles from "./Projects.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import pancakeImg from "../../assets/pancakeswap.png";
import portfolioImg from "../../assets/ivanpage.png";
import BackgroundAnimation from "../Background/Background";
import Button from "../Buttons/Button";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { DataContext } from "../../DataContext";

const Projects = () => {
  const { portfolioData } = useContext(DataContext);

  const { projects } = portfolioData || {};
  const { pancake, portfolio } = projects || {};

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <BackgroundAnimation containerClassName={styles.fondo} />

      <div className={styles.titleCont}>
        <h1 className={styles.title}>Proyectos web</h1>
      </div>

      <div className={styles.cards}>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="center-bottom"
          className={styles.card}
        >
          <div className={styles.cardContent}>
            {" "}
            <div className={styles.cardImage}>
              <img src={pancakeImg} alt="website_image" width="300px" />
            </div>
            <div className={styles.cardText}>
              <h5 className={styles.cardTitle}>{pancake?.name}</h5>
              <div className={styles.tech}>
                {pancake?.items?.map((item, index) => (
                  <span key={index} className={styles.techItem}>
                    {item}
                  </span>
                ))}
              </div>
              <p className={styles.cardParagraph}>{pancake?.description}</p>
              <div className={styles.btnCont}>
                <Button
                  isBlack
                  texto="Código"
                  icon={<FaGithub />}
                  link={pancake?.github}
                  openInNewTab
                />
                <Button
                  isWeb
                  texto="Ver Web"
                  icon={<TbExternalLink />}
                  link={pancake?.link}
                  openInNewTab
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="center-bottom"
          className={styles.card}
        >
          <div className={styles.cardContent}>
            {" "}
            <img
              className={styles.cardImage}
              src={portfolioImg}
              alt="website_image"
              width="300px"
            />
            <div className={styles.cardText}>
              <h5 className={styles.cardTitle}>{portfolio?.name}</h5>
              <div className={styles.tech}>
                {portfolio?.items?.map((item, index) => (
                  <span key={index} className={styles.techItem}>
                    {item}
                  </span>
                ))}
              </div>
              <p className={styles.cardParagraph}>{portfolio?.description}</p>
              <div className={styles.btnCont}>
                <Button
                  isBlack
                  texto="Código"
                  icon={<FaGithub />}
                  link={portfolio?.github}
                  isPortfolio
                  openInNewTab
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.moreProjects}>Más proyectos proximamente...</h1>
    </section>
  );
};

export default Projects;
