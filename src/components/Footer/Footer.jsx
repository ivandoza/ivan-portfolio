import React, { useContext } from "react";
import styles from './Footer.module.scss'
import { FaChevronCircleUp } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  PiGithubLogo,
  PiLinkedinLogo,
  PiTelegramLogo,
} from "react-icons/pi";
import { DataContext } from "../../DataContext";

function Footer() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const { portfolioData } = useContext(DataContext);

  const { social } = portfolioData || {};
  const { linkedin, github, telegram } = social || {};
    return (
      <section id="footer" className={styles.footer}>
        <div className={styles.scrollUp}>
          <Link 
                className={styles.smoothscroll}
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={scrollToTop}
                >
                  <i className={styles.downCircle}>
                  <FaChevronCircleUp />
                  </i>
                </Link>
          </div>
              <div className={styles.copyright}>
                <p>&copy; Diseñado por <span>Iván Dorta.</span></p>
            </div>
            <ul className={styles.media}>
                    <li><a href={github} target="_blank"><PiGithubLogo /></a>
                      
                    </li>
                    <li><a href={linkedin} target="_blank"><PiLinkedinLogo /></a>
                      
                    </li>
                    <li><a href={telegram} target="_blank"><PiTelegramLogo /></a>
                      
                    </li>
                  </ul>
          
      </section>
    );
  }

export default Footer;