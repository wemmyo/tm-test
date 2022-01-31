import * as React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import routes from "../../routes";
import styles from "./Landing.module.css";

interface LandingScreenProps {}

const LandingScreen: React.FC<LandingScreenProps> = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Find the right card for you</h1>
      <Link to={routes.ELIGIBILITY_CHECK}>
        <Button type="button" title="Check my eligibility" />
      </Link>
      <ul className={styles.bulletpoints}>
        <li>See best offers</li>
        <li>Always free</li>
      </ul>
    </div>
  );
};

export default LandingScreen;
