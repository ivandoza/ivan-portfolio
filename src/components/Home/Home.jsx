import React from "react";
// import Fade from "react-reveal";
import styles from'./Home.module.scss'
import BackgroundAnimation from "../Background/BackgroundAnimation";

function Home(props) {

    // if (!props.data) return null;

// const { project, github, name, description } = props.data

  return (
    <header>
      
    {/* <nav className={styles.navWrap}>
      <a className={styles.mobileBtn} href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className={styles.mobileBtn} href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className={styles.nav}>
        <li className={styles.current}>
          <a className={styles.smoothscroll} href="#home">
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

    <div className="row banner">
      <div className="banner-text">
        <Fade bottom>
          <h1 className="responsive-headline">{name}</h1>
        </Fade>
        <Fade bottom duration={1200}>
          <h3>{description}.</h3>
        </Fade>
        <hr />
        <Fade bottom duration={2000}>
          <ul className="social">
            <a href={project} className="button btn project-btn">
              <i className="fa fa-book"></i>Project
            </a>
            <a href={github} className="button btn github-btn">
              <i className="fa fa-github"></i>Github
            </a>
          </ul>
        </Fade>
      </div>
    </div>

    <p className="scrolldown">
      <a className={styles.smoothscroll} href="#about">
        <i className="icon-down-circle"></i>
      </a>
    </p> */}
  </header>
  );
}

export default Home;
