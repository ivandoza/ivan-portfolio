import React, { useEffect, useState } from "react";
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

function Header() {
  // if (!props.data) return null;

  // const { project, github, name, description } = props.data
  const handleHomeClick = (event) => {
    event.preventDefault(); // Evitar que el navegador siga el enlace
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isNavBlack, setIsNavBlack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector("header").offsetHeight;
      const scrollPosition = window.scrollY;

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Home>
      <header id="#home">
        {!isContactOpen && (
          <>
            {isNavbarVisible && (
              <nav
                id="nav-wrap"
                className={isNavBlack === true ? styles.opaque : styles.navWrap}
              >
                <a className={styles.mobileBtn} href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className={styles.mobileBtn} href="#home" title="Hide navigation">
        Hide navigation
      </a>
                <ul id="nav" className={styles.nav}>
                  <li className={styles.current}>
                    <a
                      className={styles.smoothscroll}
                      href="#home"
                      onClick={handleHomeClick}
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a className={styles.smoothscroll} href="#about">
                      About
                    </a>
                  </li>

                  <li>
                    <a className={styles.smoothscroll} href="#resume">
                      Resume
                    </a>
                  </li>

                  <li>
                    <a className={styles.smoothscroll} href="#portfolio">
                      Works
                    </a>
                  </li>

                  <li>
                    <a
                      className={styles.smoothscroll}
                      href="#contact"
                      onClick={() => setIsContactOpen(true)}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            )}

            <div className={styles.rowBanner}>
              <div className={styles.bannerText}>
                <Fade bottom>
                  <h1 className={styles.nombre}>IVÁN DORTA.</h1>
                </Fade>
                <Fade bottom duration={1200}>
                  <h3>
                    {/* {description}. */}
                    Soy un full stack software developer, apasionado del
                    frontend y con conocimientos de backend. nacido en santa
                    cruz de tenerife
                  </h3>
                </Fade>
                <hr />
                <Fade bottom duration={2000}>
                  <ul className={styles.social}>
                    <li>
                      <Button
                        texto="Download CV"
                        icon={<PiDownloadSimpleBold />}
                        isBlue
                      />
                    </li>
                    <li>
                      <Button
                        texto="Contact Me"
                        icon={<PiEnvelopeSimple />}
                        isBlue
                        onClick={() => setIsContactOpen(true)}
                      />
                    </li>
                  </ul>
                </Fade>
                <Fade bottom duration={2500}>
                  <ul className={styles.media}>
                    <li>
                    <PiGithubLogo />
                      <span className={styles.tooltip}>
                     
                      Github
                      </span>
                    </li>
                    <li>
                    <PiLinkedinLogo />
                    <span className={styles.tooltip}>
                      
                      Linkedin
                      </span>
                    </li>
                    <li>
                    <PiTelegramLogo />
                    <span className={styles.tooltip}>
                      
                      Telegram
                      </span>
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
            <p className={styles.scrolldown}>
              <a className={styles.smoothscroll} href="#about">
                <i className={styles.downCircle}>
                  <FaChevronCircleDown />
                </i>
              </a>
            </p>
          </>
        )}
        
      </header>
      {isContactOpen && <Modal onClose={() => setIsContactOpen(false)} />}
    </Home>
  );
}

export default Header;
