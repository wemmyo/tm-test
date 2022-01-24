import * as React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import routes from "../../routes";

function Header() {
  return (
    <header className={styles.header}>
      <Link to={routes.LANDING}>Crazy Cards</Link>
    </header>
  );
}

export default Header;
