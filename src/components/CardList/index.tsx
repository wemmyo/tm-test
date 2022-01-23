import * as React from "react";
import Card from "../Card";

interface Card {
  id: number;
  label: string;
  apr: number;
  balanceTransferOfferDuration: number;
  purchaseOfferDuration: number;
  credit: number;
}

interface CardListProps {
  cards: Card[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div>
      {cards.map((card: Card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export default CardList;
