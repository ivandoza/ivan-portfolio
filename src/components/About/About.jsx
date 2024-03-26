import React from "react";
import styles from "./About.module.scss";
import { Fade } from "react-awesome-reveal";
import profileImg from "../../assets/ivandorta.png";
import Skills from "../Skills/Skills";

function About() {
  // if (!props.data) return null;

  // const { project, github, name, description } = props.data

  return (
    // <Fade duration={1000}>
    //   <div className="row">
    //     <div className="three columns">
    //       <img
    //         className="profile-pic"
    //         src={profilepic}
    //         alt="Nordic Giant Profile Pic"
    //       />
    //     </div>
    //     <div className="nine columns main-col">
    //       <h2>About Me</h2>

    //       <p>{bio}</p>
    //       <div className="row">
    //         <div className="columns contact-details">
    //           <h2>Contact Details</h2>
    //           <p className="address">
    //             <span>{name}</span>
    //             <br />
    //             <span>
    //               {street}
    //               <br />
    //               {city} {state}, {zip}
    //             </span>
    //             <br />
    //             <span>{phone}</span>
    //             <br />
    //             <span>{email}</span>
    //           </p>
    //         </div>
    //         <div className="columns download">
    //           <p>
    //             <a href={resumeDownload} className="button">
    //               <i className="fa fa-download"></i>Download Resume
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Fade>
    <section id="about" className={styles.About}>
      <div className={styles.effect}></div>
      <div className={styles.content}>
          <div className={styles.profile}>
            <div className={styles.profileTop}>
            <Fade duration={1000}>
              <div className={styles.imgContainer}>
                <div className={styles.story}>
                  <div className={styles.storyImg}>
                    <img src={profileImg} alt="ivan" type="png" />
                  </div>
                </div>
              </div>
              <div className={styles.title}>
                <p>Hi, I'm Ivan</p>
              </div>
              </Fade>
            </div>
            
            <div className={styles.profileInfo}>
              <div className={styles.text}>
              <div className={styles.titleText}><h2>About me:</h2></div>
                <p>
                  Software Developer, apasionado por el desarrollo Frontend ♥️.
                  Me encanta crear sitios web que brinden una experiencia de
                  usuario única y satisfactoria. Puedes ver algunos de mis
                  proyectos en la sección de proyectos. Soy una persona
                  autodidacta, responsable y comprometida con mi trabajo.
                  Constantemente estoy aprendiendo nuevas tecnologías y
                  herramientas para mejorar mis habilidades. Si tiene alguna
                  pregunta o algun comentario no dude en contactarme.
                </p>
              </div>
            </div>
            
          </div>
          <Fade duration={1000}>
        <Skills />
        </Fade>
      </div>
    </section>
  );
}

export default About;
