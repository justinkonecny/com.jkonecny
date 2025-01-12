import React, { FC } from "react";
import { Section } from "./Section";
import Image from "next/image";
import { AllSkills } from "./AllSkills";
import styles from "./styles/About.module.css";

export const About: FC = () => {
  return (
    <Section>
      <div className={styles.aboutSplit}>
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p>
            Hey there, I&apos;m Justin, a Software Engineer from New Jersey. I
            live in the New York area, with my two dogs: Jingle and Willow.
          </p>
          <p>
            I&apos;m a <span className={"emphasis"}>Software Engineer</span> at{" "}
            <span className={"emphasis"}>Meta</span>. I love developing software
            across the stack, and I&apos;m always looking for new opportunities
            to expand my skill set. I&apos;m open to exploring positions where I
            can make meaningful software contributions to real products.
          </p>
        </div>

        <div className={styles.aboutProfile}>
          <div className={styles.profileCrop}>
            <Image
              src="/assets/profile.jpeg"
              className={styles.profileImg}
              width={300}
              height={300} // dummy
              alt={"Profile"}
            />
          </div>
        </div>
      </div>

      <AllSkills />
    </Section>
  );
};

export default About;
