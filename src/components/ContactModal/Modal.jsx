import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import { SlClose } from "react-icons/sl";
import { GoCopy } from "react-icons/go";
import ModalMsg from "../ModalMsg/ModalMsg";
import { PiGithubLogo, PiLinkedinLogo, PiTelegramLogo } from "react-icons/pi";
import Background from "../Background/Background";
import { DataContext } from "../../DataContext";

const Modal = ({ onClose }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const { portfolioData } = useContext(DataContext);

  const { social } = portfolioData || {};
  const { linkedin, github, telegram } = social || {};

  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => setShowModal(true))
      .catch((error) =>
        console.error("Error al copiar al portapapeles:", error)
      );
  };

  return (
    <div className={styles.modalOverlay}>
      <Background />
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <span />
          <h3>Contacta conmigo:</h3>
          <button className={styles.close} onClick={onClose}>
            <span className={styles.closeSVG}>
              <SlClose />
            </span>
          </button>
        </div>
        <div className={styles.formContainer}>
          <form
            className={styles.form}
            name="contact"
            method="POST" 
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              required
            />
            <input
              type="text"
              placeholder="Asunto"
              name="subject"
              required
            />
            <textarea
              placeholder="Mensaje"
              rows="5"
              name="message"
              required
            ></textarea>
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>

          <div className={styles.email}>
            <div
              className={styles.emailBox}
              onClick={(e) =>
                copyToClipboard(document.getElementById("emailText").innerText)
              }
            >
              <p id="emailText">ivandoza@gmail.com</p>
              <GoCopy className={styles.copyIcon} />
            </div>
            {showModal && (
              <ModalMsg closeMsg={() => setShowModal(false)}>
                ¡Copiado al portapapeles!
              </ModalMsg>
            )}
          </div>
          <ul className={styles.media}>
            <li>
              <a href={github} target="_blank">
                <PiGithubLogo />
              </a>
            </li>
            <li>
              <a href={linkedin} target="_blank">
                <PiLinkedinLogo />
              </a>
            </li>
            <li>
              <a href={telegram} target="_blank">
                <PiTelegramLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  modal: PropTypes.string,
};

export default Modal;
