import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png"
        alt="Logo"
      />
      <nav>
        <a href="">Home</a>
        <a href="">Contacts</a>
        <a href="">Products</a>
      </nav>
    </header>
  );
}
