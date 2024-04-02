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

  //Form

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Simulando una solicitud de envío a un servidor
    // En un entorno real, reemplaza este bloque con la lógica de tu servidor
    setTimeout(() => {
      // Si se envía correctamente
      setSuccessMessage(true);
      setErrorMessage(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);

    // Código real para enviar datos al servidor
    // fetch('URL_DEL_SERVIDOR', {
    //     method: 'POST',
    //     body: JSON.stringify(formData)
    // })
    // .then(response => {
    //     if (response.ok) {
    //         setSuccessMessage(true);
    //         setErrorMessage(false);
    //         setFormData({
    //             name: '',
    //             email: '',
    //             subject: '',
    //             message: ''
    //         });
    //     } else {
    //         setSuccessMessage(false);
    //         setErrorMessage(true);
    //     }
    // })
    // .catch(error => {
    //     console.error('Error al enviar el formulario:', error);
    //     setSuccessMessage(false);
    //     setErrorMessage(true);
    // });
  };

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
    <div id="contact" className={styles.modalOverlay}>
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
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Asunto"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              placeholder="Mensaje"
              rows="5"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div>
              <button type="submit">Enviar</button>
            </div>
            {successMessage && (
              <ModalMsg
                type="alert"
                closeMsg={() => {
                  setShowModal(false);
                  setSuccessMessage(false);
                }}
              >
                ¡Mensaje enviado! Te responderé lo antes posible.
              </ModalMsg>
            )}
            {errorMessage && (
              <ModalMsg
                type="alert"
                closeMsg={() => {
                  setShowModal(false);
                  setErrorMessage(false);
                }}
              >
                ¡El mensaje no se pudo enviar! Por favor, intenta nuevamente más
                tarde.
              </ModalMsg>
            )}
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
