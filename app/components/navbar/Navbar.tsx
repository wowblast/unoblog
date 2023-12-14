import React from "react";
import Link from "next/link";
import AuthLinks from "../auth-links/AuthLinks";
import Toggle from "../toggle/Toggle";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo} data-testId="logo">
        EpicEnigma Echo
      </Link>

      <div className={styles.menu}>
        <Toggle data-testId="toggleLabel" />

        <Link href="/" className={styles.link} data-testId="homeLink">
          Home
        </Link>
        <Link href="/about" className={styles.link} data-testId="aboutLink">
          About
        </Link>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
