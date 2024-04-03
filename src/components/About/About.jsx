import React, { useContext, useEffect, useState } from "react";
import styles from "./About.module.scss";
import { Fade } from "react-awesome-reveal";
import profileImg from "../../assets/ivandorta.png";
import Skills from "../Skills/Skills";
import ToggleTab from "./ToggleTab/ToggleTab";
import { DataContext } from "../../DataContext";

function About() {
  const { portfolioData } = useContext(DataContext);

  const { info } = portfolioData || {};
  const { message, profile, experience, studies } = info || {};

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const isVisible =
        aboutSection.getBoundingClientRect().top < window.innerHeight;
      if (isVisible) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isActiveImg, setIsActiveImg] = useState(false);

  const toggleActive = () => {
    setIsActiveImg(!isActiveImg);
    if (!isActiveImg) {
      setTimeout(() => {
        setIsActiveImg(false);
      }, 2000);
    }
  };

  const handleClickOutside = () => {
    if (isActiveImg) {
      setIsActiveImg(false);
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.content} onClick={handleClickOutside}>
        <h2>Sobre mi:</h2>
        <div className={styles.profile}>
          <div className={styles.avatarContainer}>
            <Fade duration={1000} when={animate}>
              <div className={styles.imgContainer}>
                <div className={styles.story}>
                  <div
                    className={`${styles.storyImg} ${
                      animate ? styles.animate : ""
                    } ${isActiveImg ? styles.activeImg : styles.imagen}`}
                    onClick={toggleActive}
                  >
                    <img src={profileImg} alt="Ivan" type="png" />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.title} ${animate ? styles.animate : ""}`}
              >
                <p>{message}</p>
              </div>
            </Fade>
          </div>
          <ToggleTab
            profile={profile}
            experience={experience}
            studies={studies}
          />
        </div>
        <Fade duration={1000} style={{ width: "100%" }}>
          <Skills />
        </Fade>
      </div>
    </section>
  );
}

export default About;
