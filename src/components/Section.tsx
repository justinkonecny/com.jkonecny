import React, { FC, PropsWithChildren } from "react";
import styles from "./styles/Section.module.css";

interface Props {
  id?: string;
  alignment?: "left";
}

export const Section: FC<PropsWithChildren<Props>> = ({
  id,
  alignment,
  children,
}) => {
  const contentStyle = [styles.sectionContent];
  if (alignment === "left") {
    contentStyle.push(styles.sectionLeft);
  }

  return (
    <div id={id} className={styles.sectionContainer}>
      <div className={contentStyle.join(" ")}>{children}</div>
    </div>
  );
};

export default Section;
