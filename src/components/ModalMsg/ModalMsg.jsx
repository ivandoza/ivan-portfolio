import React, { useEffect } from "react";
import styles from "./ModalMsg.module.scss";
import { IoIosClose } from "react-icons/io";

const ModalMsg = ({ closeMsg, children }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      closeMsg();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [closeMsg]);

  // Cerrar el modal al hacer clic fuera del mismo
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      closeMsg();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOutsideClick}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.header}>
            {/* <button type="alert" className={styles.closeMsg} onClick={onClose}>
            <span className={styles.closeSVG}>
            <IoIosClose />
            </span>
            </button> */}
          </div>
          <div className={styles.body}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMsg;