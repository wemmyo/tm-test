import * as React from "react";
import { CardI } from "../../types";
import Card from "../Card";

interface CardListProps {
  cards: CardI[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div>
      {cards.map((card: CardI) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export default CardList;
