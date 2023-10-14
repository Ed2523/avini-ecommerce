import React from "react";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Avini</div>
        <ul className={styles.navLinks}>
          <li>
            <a>
              <FaShoppingCart />
              Cart
            </a>
          </li>
          <li>
            <a>
              <FaUser />
              Sign In
            </a>
          </li>
        </ul>
        <div className={styles.burger} onClick={toggleMenu}>
          <span
            className={open ? styles.burgerSpan1 : styles.burgerSpan}></span>
          <span
            className={open ? styles.burgerSpan2 : styles.burgerSpan}></span>
          <span
            className={open ? styles.burgerSpan3 : styles.burgerSpan}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
