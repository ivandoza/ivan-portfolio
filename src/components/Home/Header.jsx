import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./Header.module.scss";
import Button from "../Buttons/Button";
import { FaChevronCircleDown } from "react-icons/fa";
import {
  PiDownloadSimpleBold,
  PiEnvelopeSimple,
  PiGithubLogo,
  PiLinkedinLogo,
  PiTelegramLogo,
} from "react-icons/pi";
import Modal from "../ContactModal/Modal";
import Home from "./Home";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../data/DataContext";

function Header() {
  const { portfolioData } = useContext(DataContext);

  const { social } = portfolioData || {};
  const { linkedin, github, telegram } = social || {};

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isNavBlack, setIsNavBlack] = useState(false);
  const [current, setCurrent] = useState("");
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector("header").offsetHeight;
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      let found = false;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (!found && window.scrollY < top + height) {
          setCurrent(section.id);
          found = true;
        }
      });

      if (
        scrollPosition > headerHeight * 0.2 &&
        scrollPosition < headerHeight &&
        window.innerWidth > 768
      ) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      if (scrollPosition >= headerHeight) {
        setIsNavBlack(true);
      } else {
        setIsNavBlack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleDownload = () => {
    window.location.href = "https://ivan-cv.netlify.app/CV-IVAN.pdf";
  };
  //   const pdfUrl = "/CV_Ivan_Dorta.pdf";

  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.target = "_blank";
  //   link.rel = "noopener noreferrer";

  //   link.click();
  // };

  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsContactOpen(true);
    navigate("/contact");
  };

  return (
    <Home>
      <header id="home">
        <>
          {isNavbarVisible && (
            <nav
              id="nav-wrap"
              className={isNavBlack === true ? styles.opaque : styles.navWrap}
            >
              <Fade bottom duration={500} delay={fontsLoaded ? 0 : 500}>
                <ul id="nav" className={styles.nav}>
                  <li
                    className={
                      current != "about" &&
                      current != "projects" &&
                      current != "contact"
                        ? styles.current
                        : ""
                    }
                  >
                    <a
                      className={styles.smoothscroll}
                      href="#home"
                      onClick={scrollToTop}
                    >
                      Home
                    </a>
                  </li>

                  <li className={current === "about" ? styles.current : ""}>
                    <Link
                      className={styles.smoothscroll}
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={900}
                    >
                      Sobre mi
                    </Link>
                  </li>

                  <li className={current === "projects" ? styles.current : ""}>
                    <Link
                      className={styles.smoothscroll}
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={900}
                    >
                      Proyectos
                    </Link>
                  </li>

                  <li className={current === "contact" ? styles.current : ""}>
                    <a
                      className={styles.smoothscroll}
                      onClick={handleOpenModal}
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </Fade>
            </nav>
          )}

          <div className={styles.rowBanner}>
            <div className={styles.bannerText}>
              <Fade bottom duration={1200} delay={fontsLoaded ? 0 : 500}>
                <h1 className={styles.nombre}>IVÁN DORTA.</h1>
                <h3>Full Stack Web Developer</h3>
              </Fade>
              <hr />
              <Fade bottom duration={2000} delay={fontsLoaded ? 0 : 500}>
                <ul className={styles.mainButtons}>
                  <li>
                    <Button
                      texto="Descargar CV"
                      icon={<PiDownloadSimpleBold />}
                      isGrey
                      onClick={handleDownload}
                    />
                  </li>
                  <li>
                    <Button
                      texto="Contactar"
                      icon={<PiEnvelopeSimple />}
                      isGrey
                      onClick={handleOpenModal}
                    />
                  </li>
                </ul>
              </Fade>
              <Fade bottom duration={2500} delay={fontsLoaded ? 0 : 500}>
                <ul className={styles.media}>
                  <li>
                    <a href={github} target="_blank">
                      <PiGithubLogo />
                    </a>
                    <span className={styles.tooltip}>Github</span>
                  </li>
                  <li>
                    <a href={linkedin} target="_blank">
                      <PiLinkedinLogo />
                    </a>
                    <span className={styles.tooltip}>Linkedin</span>
                  </li>
                  <li>
                    <a href={telegram} target="_blank">
                      <PiTelegramLogo />
                    </a>
                    <span className={styles.tooltip}>Telegram</span>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
          <Fade bottom duration={2500} delay={fontsLoaded ? 0 : 500}>
            <div className={styles.scrolldown}>
              <Link
                className={styles.smoothscroll}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={2500}
              >
                <i className={styles.downCircle}>
                  <FaChevronCircleDown />
                </i>
              </Link>
            </div>
          </Fade>
        </>
      </header>
      {isContactOpen && <Modal onClose={() => setIsContactOpen(false)} />}
    </Home>
  );
}

export default Header;
