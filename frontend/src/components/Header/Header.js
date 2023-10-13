import React from "react";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
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
      </nav>
    </header>
  );
};

export default Header;
