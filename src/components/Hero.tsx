import React, { FC } from "react";
import Section from "./Section";
import styles from "./styles/Hero.module.css";

export const Hero: FC = () => {
  return (
    <Section isFullHeight={true}>
      <div className={styles.heroContent}>
        <h1>Hi, I&apos;m Justin.</h1>
        <p className={styles.subtitle}>
          I&apos;m a <span className={"emphasis"}>Software Engineer</span>.
        </p>
      </div>
    </Section>
  );
};

export default Hero;
