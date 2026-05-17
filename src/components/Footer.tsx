import React, { FC } from "react";
import styles from "./styles/Footer.module.css";

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <p className={styles.text}>
      Want to connect?{" "}
      <a
        href="https://www.linkedin.com/in/justin-konecny"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reach out on LinkedIn
      </a>
      .
    </p>
  </footer>
);

export default Footer;
