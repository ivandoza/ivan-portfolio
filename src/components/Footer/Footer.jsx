import React from "react";
import styles from './Footer.module.scss'

function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.row}>
            <div className={styles.twelveColumns}>
              <ul className={styles.socialLinks}></ul>

              <ul className={styles.copyright}>
                <li>&copy; Copyright 2021 Nordic Giant</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>

          <div id="go-top" className={styles.copyright}>
            <a className={styles.smoothscroll} title="Back to Top" href="#home">
              <i className={styles.iconUpOpen}></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;