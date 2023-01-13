import Image from "next/image";
import Logo from "../public/logo.svg";
import styles from "../styles/Navbar.module.css";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import MenuMobile from "./MenuMobile";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  const handleMenu = () => {
    setMenuState((prev) => !prev);
  };

  const handleClose = () => {
    setMenuState((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <Image
        src={Logo}
        width={100}
        height={100}
        className={styles.logo}
        alt="Logo"
      />
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
    </nav>
  );
};

export default Navbar;
