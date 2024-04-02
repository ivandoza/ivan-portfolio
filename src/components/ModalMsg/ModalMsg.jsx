import React, { useEffect } from "react";
import styles from "./ModalMsg.module.scss";

const ModalMsg = ({ closeMsg, children }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      closeMsg();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [closeMsg]);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      closeMsg();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOutsideClick}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalMsg;