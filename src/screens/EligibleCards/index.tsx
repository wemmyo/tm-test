import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Card from "../../components/Card";
import CardList from "../../components/CardList";

interface EligibleCardsScreenProps {}

interface Card {
  id: number;
  label: string;
  apr: number;
  balanceTransferOfferDuration: number;
  purchaseOfferDuration: number;
  credit: number;
}

const EligibleCardsScreen: React.FC<EligibleCardsScreenProps> = () => {
  const location = useLocation<{
    eligibleCards: Card[];
  }>();
  const history = useHistory();
  const eligibleCards = location.state.eligibleCards;

  const renderCards = eligibleCards.map((card) => (
    <div key={card.id}>
      <p>{card.label}</p>
    </div>
  ));
  return (
    <div className="container">
      <h1>Congrats you are eligible for the following cards</h1>
      <CardList cards={eligibleCards} />
      {/* {renderCards} */}
    </div>
  );
};

export default EligibleCardsScreen;
