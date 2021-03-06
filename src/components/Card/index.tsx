import * as React from "react";
import styles from "./Card.module.css";

interface CardProps {
  data: {
    label: string;
    apr: number;
    balanceTransferOfferDuration: number;
    purchaseOfferDuration: number;
    credit: number;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const {
    label,
    apr,
    balanceTransferOfferDuration,
    purchaseOfferDuration,
    credit,
  } = data;
  return (
    <div className={styles.card}>
      <p className={styles.label}>{label}</p>
      <p>
        Apr: <strong>{apr}</strong>
      </p>
      <p>
        Balance Transfer Offer Duration:
        <strong>{balanceTransferOfferDuration} Months</strong>
      </p>
      <p>
        Purchase Offer Duration:
        <strong>{purchaseOfferDuration} Months</strong>
      </p>
      <p>
        Credit Available: <strong>{credit}</strong>
      </p>
    </div>
  );
};

export default Card;
