import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import { SlClose } from "react-icons/sl";
import { GoCopy } from "react-icons/go";
import ModalMsg from "../ModalMsg/ModalMsg";
import { PiGithubLogo, PiLinkedinLogo, PiTelegramLogo } from "react-icons/pi";
import Background from "../Background/Background";
import { DataContext } from "../../data/DataContext";
import axios from "axios";
import emailjs from "@emailjs/browser";

const Modal = ({ onClose }) => {
  const navigate = useNavigate();
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

  //Form

  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Form Data", formData);

    const serviceId = process.env.SERVICE_ID;
    const publicId = process.env.PUBLIC_ID;
    const templateId = process.env.TEMPLATE_ID;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicId,
      })
      .then(
        () => {
          setSuccessMessage(true);
          setErrorMessage(false);
          console.log("Email sent");
        },
        (error) => {
          setSuccessMessage(false);
          setErrorMessage(true);
          console.log("Error sending email", error.text);
        }
      );

    //Code for express App

    //  try {
    //   const response = await axios.post('/api/send-email', formData);
    //   if (response.status === 200) {
    //     console.log('Correo electrónico enviado con éxito');
    //     setSuccessMessage(true);
    //     setErrorMessage(false);
    //   } else {
    //     console.error('Error al enviar el correo electrónico');
    //     setSuccessMessage(false);
    //     setErrorMessage(true);
    //   }
    // } catch (error) {
    //   console.error('Error al enviar el correo electrónico:', error);
    //   setSuccessMessage(false);
    //   setErrorMessage(true);
    // }
    setTimeout(() => {
      navigate("/");
    }, 3500);
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
          <form className={styles.form} ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Asunto"
              name="subject"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
            <textarea
              placeholder="Mensaje"
              rows="5"
              name="message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
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
