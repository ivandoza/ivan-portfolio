import React, { useState, useRef, useEffect } from "react";
import styles from "./LanguageDropdown.module.scss";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { HiSwitchVertical } from "react-icons/hi";
import { CgArrowsExchange, CgArrowsExchangeV } from "react-icons/cg";
import { TfiExchangeVertical } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";

const LanguageDropdown = ({ reverse }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimerRef = useRef(null);

  const showDropdown = () => {
    clearTimeout(dropdownTimerRef.current);
    setIsDropdownOpen(true);
  };

  const hideDropdown = () => {
    // DELAY antes de que esconder el dropdown
    dropdownTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleContentMouseEnter = () => {
    //Borra el temporizador cuando el mouse ingrese al contenido desplegable
    clearTimeout(dropdownTimerRef.current);
  };

  const handleContentMouseLeave = () => {
    // oculta el menú desplegable cuando el mouse abandone el contenido
    hideDropdown();
  };

  useEffect(() => {
    // Borra el temporizador cuando el componente se desmonte
    return () => {
      clearTimeout(dropdownTimerRef.current);
    };
  }, []);

  const { i18n } = useTranslation();
  const handleLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsDropdownOpen(false); // Cierra el dropdown después de seleccionar un idioma
  };

  return (
    <div
      className={`${styles.dropdownContainer} ${
        isDropdownOpen ? styles.open : ""
      }`}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <div className={styles.currentLanguage}>
        <Icon
          icon={i18n.language === "es" ? "circle-flags:es" : "circle-flags:uk"}
        />
        <button className={styles.dropdownButton}></button>
        <IoIosArrowDown />
        {isDropdownOpen && (
          <div
            className={styles.dropdownContent}
            onMouseEnter={handleContentMouseEnter}
            onMouseLeave={handleContentMouseLeave}
          >
            {i18n.language === "es" ? (
              <button
                className={styles.item}
                onClick={() => handleLanguageChange("en")}
              >
                <Icon icon="circle-flags:uk" />
              </button>
            ) : (
              <button
                className={styles.item}
                onClick={() => handleLanguageChange("es")}
              >
                <Icon icon="circle-flags:es" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageDropdown;
