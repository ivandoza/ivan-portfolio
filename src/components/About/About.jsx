import React from "react";
import styles from "./About.module.scss";
import { Fade } from "react-awesome-reveal";
import profileImg from "../../assets/ivandorta.png";
import Skills from "../Skills/Skills";
import ToggleTab from "./ToggleTab/ToggleTab";

function About() {


  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <h2>About Me:</h2>
        <div className={styles.profile}>
          <div className={styles.avatarContainer}>
            <Fade duration={1000}>
              <div className={styles.imgContainer}>
                <div className={styles.story}>
                  <div className={styles.storyImg}>
                    <img src={profileImg} alt="Ivan" type="png" />
                  </div>
                </div>
              </div>
              <div className={styles.title}>
                <p>Hola, soy Iván</p>
              </div>
            </Fade>
          </div>
          <ToggleTab />
        </div>
        <Fade duration={1000}>
          <Skills />
        </Fade>
      </div>
    </section>
  );
}

export default About;
