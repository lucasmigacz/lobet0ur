import Image from "next/image";
import Logo from "../public/logo.svg";
import styles from "../styles/Navbar.module.css";
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";
import MenuMobile from "./MenuMobile";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { motion, useViewportScroll, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const { scrollYProgress } = useViewportScroll();
  const [menuState, setMenuState] = useState(false);

  const handleMenu = () => {
    setMenuState((prev) => !prev);
  };

  return (
    <motion.nav
      className={styles.navbar}
      style={{
        padding: scrollYProgress > 0 ? 550 : 0,
      }}
    >
      <Link href="/">
        <Image
          src={Logo}
          width={100}
          height={100}
          className={styles.logo}
          alt="Logo"
        />
      </Link>
      <div className={styles.navbarItems}>
        <ul>
          <li>Overview</li>
          <li>Examples</li>
          <li>Tour</li>
          <li>Blog</li>
          <li>Help</li>
        </ul>
      </div>
      <a href="https://lobeprod.azureedge.net/downloads/windows/Lobe.exe">
        <button className={styles.buttonDownload}>Download</button>
      </a>

      <AnimatePresence mode="wait" initial={false}>
        {menuState ? (
          <MenuMobile
            menuState={menuState}
            setMenuState={setMenuState}
            key="menuMobile"
          />
        ) : (
          <motion.button
            className={styles.hiMenuContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="open_menu"
          >
            <HiMenu
              size={35}
              className={styles.mobileMenuIcon}
              onClick={handleMenu}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
