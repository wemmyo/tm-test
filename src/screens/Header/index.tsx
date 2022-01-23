import * as React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import routes from "../../routes";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to={routes.LANDING}>Crazy Cards</Link>
      </div>
    </header>
  );
}

export default Header;
