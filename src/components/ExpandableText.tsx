"use client";
import React, { FC, PropsWithChildren, useState } from "react";
import style from "./styles/ExpandableText.module.css";

interface Props {
  text: string;
}

export const ExpandableText: FC<PropsWithChildren<Props>> = ({
  text,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={style.expandableContainer}>
      <div
        className={style.expandableHeader}
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        aria-expanded={isExpanded}
      >
        <h5>{text}</h5>
        <span className={`${style.chevron} ${isExpanded ? style.chevronOpen : ""}`}>▸</span>
      </div>
      <div className={`${style.expandableContent} ${isExpanded ? style.expandableOpen : ""}`}>
        <div className={style.expandableInner}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExpandableText;
