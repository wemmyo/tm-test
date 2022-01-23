import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";

interface EligibleCardsScreenProps {}

const EligibleCardsScreen: React.FC<EligibleCardsScreenProps> = () => {
  const location = useLocation<{
    eligibleCards: { id: number; label: string }[];
  }>();
  const history = useHistory();
  const eligibleCards = location.state.eligibleCards;

  const renderCards = eligibleCards.map((card) => (
    <div key={card.id}>
      <p>{card.label}</p>
    </div>
  ));

  return <div>{renderCards}</div>;
};

export default EligibleCardsScreen;
