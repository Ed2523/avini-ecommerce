import React from "react";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to='/'>
          <h1>Avini</h1>
        </Link>
        <ul className={open ? styles.navLinksOpen : styles.navLinks}>
          <li>
            <Link to='/cart'>
              <FaShoppingCart />
              Cart
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <FaUser />
              Sign In
            </Link>
          </li>
        </ul>
        <div className={styles.burger} onClick={toggleMenu}>
          <span
            className={
              open ? styles.openBurgerSpan1 : styles.burgerSpan
            }></span>
          <span
            className={
              open ? styles.openBurgerSpan2 : styles.burgerSpan
            }></span>
          <span
            className={
              open ? styles.openBurgerSpan3 : styles.burgerSpan
            }></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
