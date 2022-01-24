import React from "react";
import { shallow } from "enzyme";
import CardList from "./index";

const mockCards = [
  {
    id: 1,
    label: "Student Life",
    apr: 0.189,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 6,
    credit: 1200,
  },
  {
    id: 2,
    label: "Anywhere Card",
    apr: 0.339,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 0,
    credit: 300,
  },
  {
    id: 3,
    label: "Liquid Card",
    apr: 0.339,
    balanceTransferOfferDuration: 12,
    purchaseOfferDuration: 6,
    credit: 3000,
  },
];

it("renders without crashing", () => {
  expect(shallow(<CardList cards={mockCards} />)).toMatchSnapshot();
});
