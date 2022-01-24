import React from "react";
import { shallow } from "enzyme";
import Card from "./index";

const mockData = {
  id: 1,
  label: "Student Life",
  apr: 0.189,
  balanceTransferOfferDuration: 0,
  purchaseOfferDuration: 6,
  credit: 1200,
};

it("renders without crashing", () => {
  expect(shallow(<Card data={mockData} />)).toMatchSnapshot();
});
