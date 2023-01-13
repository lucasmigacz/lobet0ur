import Image from "next/image";
import React from "react";
import Logo from "../public/logo.svg";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.borderLine} />
      <div className={styles.containerFooter}>
        <ul className={styles.listFooter}>
          <Image
            src={Logo}
            width={80}
            className={styles.logoFooter}
            alt="Logo in Footer"
          />
          <a href="/">A product by Microsoft.</a>
          <a href="/">All rights reserved.</a>
          <a href="/">© Microsoft 2021</a>
        </ul>
        <ul className={styles.listFooter}>
          <a href="/">
            <span className={styles.boldText}>About</span>
          </a>
          <a href="/">Download</a>
          <a href="/">Overview</a>
          <a href="/">Examples</a>
          <a href="/">Blog</a>
        </ul>
        <ul className={styles.listFooter}>
          <a href="/">
            <span className={styles.boldText}>General</span>
          </a>
          <a href="/">Notice</a>
          <a href="/">License</a>
          <a href="/">Press Inquiry</a>
          <a href="/">Press Images</a>
        </ul>
        <ul className={styles.listFooter}>
          <a href="/">
            <span className={styles.boldText}>Resources</span>
          </a>
          <a href="/">Help</a>
          <a href="/">Tour</a>
          <a href="/">Contact</a>
          <a href="/">Privacy</a>
        </ul>
      </div>
    </>
  );
};

export default Footer;
