import React, { FC } from "react";
import styles from "./styles/Hero.module.css";

export const Hero: FC = () => {
  return (
    <section className={styles.heroSection} id="contact">
      <div className={styles.heroContent}>
        <h1>Justin Konecny</h1>
        <p className={styles.subtitle}>Software Engineer · Security</p>
        <p className={styles.tagline}>
          Building secure authentication and AI safety systems at Meta.
        </p>
        <div className={styles.contactRow}>
          <a
            href="https://github.com/justinkonecny"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className={styles.dot}>·</span>
          <a
            href="https://www.linkedin.com/in/justin-konecny"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
