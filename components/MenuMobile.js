import styles from "../styles/MenuMobile.module.css";
import { motion } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";

const MenuMobile = ({ setMenuState }) => {
  const handleClose = () => {
    setMenuState((prev) => !prev);
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delayChildren: 0.1,
      },
    },
  };
  return (
    <>
      <motion.button
        className={styles.hiCloseContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key="close_menu"
      >
        <HiOutlineX
          size={35}
          className={styles.mobileMenuIcon}
          onClick={handleClose}
        />
      </motion.button>

      <motion.div
        className={styles.menuMobileContainer}
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {/* <div className={styles.logoAndClose}>
          <Image
            src={Logo}
            alt="Logo Menu"
            width={100}
            className={styles.logoMenuMobile}
          />
          <IoCloseOutline
            size={50}
            className={styles.closeIcon}
            onClick={HandleClose}
          />
        </div> */}
        <div className={styles.itemsMenuMobile}>
          <ul>
            <li>Overview</li>
            <li>Examples</li>
            <li>Tour</li>
            <li>Blog</li>
            <li>Help</li>
          </ul>
        </div>
        <a href="https://lobeprod.azureedge.net/downloads/windows/Lobe.exe">
          <button className={styles.buttonDownloadMenuMobile}>Download</button>
        </a>
      </motion.div>
    </>
  );
};

export default MenuMobile;
