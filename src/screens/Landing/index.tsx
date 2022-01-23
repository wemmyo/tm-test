import * as React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import routes from "../../routes";
import styles from "./Landing.module.css";

interface LandingScreenProps {}

const LandingScreen: React.FC<LandingScreenProps> = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <h1 className={styles.title}>Find the right card for you</h1>
          <Link to={routes.ELIGIBILITY_CHECK}>
            <Button type="button" title="Check my eligibility" />
          </Link>
          <ul className={styles.bulletpoints}>
            <li>See best offers</li>
            <li>Always free</li>
          </ul>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img
            style={{ maxHeight: 500 }}
            src="https://images.unsplash.com/photo-1628625194933-ac2b3c0109e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNyZWRpdCUyMGNhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="credit card"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
