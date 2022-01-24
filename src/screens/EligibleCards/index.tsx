import * as React from "react";
import { useLocation } from "react-router-dom";
import CardList from "../../components/CardList";
import { CardI } from "../../types";

interface EligibleCardsScreenProps {}

const EligibleCardsScreen: React.FC<EligibleCardsScreenProps> = () => {
  const location = useLocation<{
    eligibleCards: CardI[];
  }>();
  const eligibleCards = location.state.eligibleCards;

  return (
    <div className="container">
      <h1>Congrats you are eligible for the following cards</h1>
      <CardList cards={eligibleCards} />
    </div>
  );
};

export default EligibleCardsScreen;
