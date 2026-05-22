"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./styles/Navbar.module.css";

export const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const heroName = document.getElementById("hero-name");
    if (!heroName) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowName(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(heroName);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.navInner}>
        <span className={`${styles.navBrand} ${showName ? styles.navBrandVisible : ""}`}>
          Justin Konecny
        </span>
        <div className={styles.navLinks}>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#education" className={styles.navLink}>Education</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
