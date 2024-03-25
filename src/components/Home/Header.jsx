import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./Header.module.scss";
import Button from "../Buttons/Button";
import { FaChevronCircleDown } from "react-icons/fa";
import { PiDownloadSimpleBold, PiEnvelope, PiEnvelopeSimple, PiGithubLogo, PiLinkedinLogo, PiTelegramLogo } from "react-icons/pi";

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

  return (
    <>
      <header id="#home">
        <nav className={styles.navWrap}>
          {/* <a className={styles.mobileBtn} href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className={styles.mobileBtn} href="#home" title="Hide navigation">
        Hide navigation
      </a> */}
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
              <a className={styles.smoothscroll} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.rowBanner}>
          <div className={styles.bannerText}>
            <Fade bottom>
              <h1 className={styles.nombre}>IVÁN DORTA.</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>
                {/* {description}. */}
                Soy un full stack software developer, apasionado del frontend y
                con conocimientos de backend. nacido en santa cruz de tenerife
              </h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className={styles.social}>
                <li>
                  <Button texto="Download CV" icon={<PiDownloadSimpleBold />}isBlue />
                </li>
                <li>
                  <Button texto="Contact Me" icon={<PiEnvelopeSimple />}isBlue />
                </li>
              </ul>
            </Fade>
            <Fade bottom duration={2500}>
              <ul className={styles.media}>
              <li>
                <PiGithubLogo />
                </li>
                <li>
                <PiLinkedinLogo />
                </li>
                <li>
                <PiTelegramLogo />
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
      </header>
    </>
  );
}

export default Header;
