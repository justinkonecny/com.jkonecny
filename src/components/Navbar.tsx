"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles/Navbar.module.css";

export const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.navBrand}>
          JUSTIN M. KONECNY
        </Link>
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
