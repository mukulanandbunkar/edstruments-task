import React from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__text}>
          Submitted by: <strong>Mukul Anand Bunkar</strong>
        </p>
        <div className={styles.footer__links}>
          <a
            href="https://www.linkedin.com/in/mukulanandbunkar/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            <FaLinkedin className={styles.footer__icon} /> LinkedIn
          </a>
          <a
            href="https://mukulanandbunkar.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            <FaGithub className={styles.footer__icon} /> Portfolio
          </a>
          <a
            href="https://drive.google.com/file/d/1xxX8hjL9whi4chfq_eK38Jvmzpw99pyQ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            <FaFileAlt className={styles.footer__icon} /> Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
