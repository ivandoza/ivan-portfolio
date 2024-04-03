import React, { useContext, useEffect } from "react";
import styles from "./Skills.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { DataContext } from "../../DataContext";
import { dataSlider } from "./SliderData";

function Skills() {
  const { portfolioData } = useContext(DataContext);

  const { skills } = portfolioData || {};

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.skills}>
      <h2>Skills:</h2>
      <div className={styles.scroll}>
        <div>
          {dataSlider.map((item, index) => (
            <span key={index} className={item.class}>
              <p className={styles.icon}>{item.icon}</p>
              <p>{item.text}</p>
            </span>
          ))}
        </div>
        <div>
          {dataSlider.map((item, index) => (
            <span key={index} className={item.class}>
              <p className={styles.icon}>{item.icon}</p>
              <p>{item.text}</p>
            </span>
          ))}
        </div>
      </div>
      <div className={styles.skillsList}>
        <ul className={styles.front} data-aos="fade-right">
          <h3>Frontend</h3>
          {skills?.frontend?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className={styles.back} data-aos="fade-left">
          <h3>Backend</h3>
          {skills?.backend?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
