import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const currentyYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <p>Avini &copy; {currentyYear}</p>
      </div>
    </div>
  );
};

export default Footer;
