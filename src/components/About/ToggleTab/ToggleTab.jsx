import { useState } from "react";
import './ToggleTab.scss'
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";

function ToggleTab() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index)
    }
  
  

    return(
        <div>
             <div className="container">
              <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}><p>Profile</p> <CgProfile /></div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}><p>Experience</p> <MdOutlineWorkOutline /></div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}><p>Studies</p>   <HiOutlineBookOpen /></div>
              </div>
              <div className="content-tabs">
              <div className={toggleState === 1 ? "content active-content" : "content"}>
                <p>Software Developer, apasionado por el desarrollo Frontend ♥️.
                  Me encanta crear sitios web que brinden una experiencia de
                  usuario única y satisfactoria. Puedes ver algunos de mis
                  proyectos en la sección de proyectos. Soy una persona
                  autodidacta, responsable y comprometida con mi trabajo.
                  Constantemente estoy aprendiendo nuevas tecnologías y
                  herramientas para mejorar mis habilidades. Si tiene alguna
                  pregunta o algun comentario no dude en contactarme.</p>
              </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                <h2>This Works</h2>
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                <h2>This Estudio</h2>
                </div>
              </div>
            </div> 
        </div>
    )
}

export default ToggleTab