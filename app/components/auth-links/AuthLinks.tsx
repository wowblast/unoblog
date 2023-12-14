"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession, signIn } from "next-auth/react";
import Image from "next/image";

import styles from "./AuthLinks.module.css";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    void signOut();
    setOpen(false);
  };

  return (
    <>
      {session ? (
        <>
          <Link href="/write" className={styles.link} data-testId="writeLink">
            Write
          </Link>
          <span
            className={styles.link}
            onClick={handleLogout}
            data-testId="logoutLink"
          >
            Logout
          </span>
          <div
            className={styles.userImageContainer}
            data-testId="userImageContainer"
          >
            <Image
              src={session.user?.image!}
              alt=""
              fill
              className={styles.avatar}
              data-testId="userImage"
            />
          </div>
        </>
      ) : (
        <Link href="/login" className={styles.link} data-testId="loginLink">
          Login
        </Link>
      )}

      <div
        className={styles.hamburger}
        onClick={toggleMenu}
        data-testId="hamburger"
      >
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>

      {open && (
        <div className={styles.mobileMenu} data-testId="mobileMenu">
          <Link href="/" data-testId="homeLink">
            Home
          </Link>
          <Link href="/about" data-testId="aboutLink">
            About
          </Link>
          <Link href="/contact" data-testId="contactLink">
            Contact
          </Link>

          {session ? (
            <>
              <Link href="/write" data-testId="writeLinkMobile">
                Write
              </Link>
              <span
                className={styles.mobileLink}
                onClick={handleLogout}
                data-testId="logoutLinkMobile"
              >
                Logout
              </span>
              <div
                className={styles.userImageContainer}
                data-testId="userImageContainerMobile"
              >
                <Image
                  src={
                    "https://lh3.googleusercontent.com/a/ACg8ocJZJ89wGhnPGsRaOGKAL2JOBik9nX81bczo3PtqFkR4iy0=s96-c"
                  }
                  alt=""
                  fill
                  className={styles.avatar}
                  data-testId="userImageMobile"
                />
              </div>
            </>
          ) : (
            <Link href="/login" data-testId="loginLinkMobile">
              Login
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
