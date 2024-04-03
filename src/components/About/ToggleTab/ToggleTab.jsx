import { useState } from "react";
import "./ToggleTab.scss";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";

function ToggleTab({ profile, experience, studies }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="container">
        <div className="bloc-tabs">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <p>Perfil</p> <CgProfile className="toggle-icon" />
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <p>Experiencia</p> <MdOutlineWorkOutline className="toggle-icon" />
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <p>Estudios</p> <HiOutlineBookOpen className="toggle-icon"/>
          </div>
        </div>
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <p>{profile}</p>
          </div>
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <p>{experience}</p>
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <p>{studies}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleTab;
