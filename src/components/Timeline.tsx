"use client";
import React, { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "./styles/Timeline.module.css";

export const Timeline: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.timelineContainer}>{children}</div>
);

export const TimelineEntry: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      // activate when entry crosses the top 50% of the viewport
      { rootMargin: "0px 0px -50% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.entry}>
      <div className={`${styles.dot} ${active ? styles.dotActive : ""}`} />
      {children}
    </div>
  );
};
