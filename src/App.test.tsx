import React from "react";
// import axios from "axios";
import { render } from "@testing-library/react";
import App from "./App";
import { postEligibilityInfo } from "./fetcher";

const axios = require("axios");

const checkEligibility = require("../server/controller/checkEligibility");

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

const mockUsers = [
  {
    id: 1,
    title: "Mr",
    firstName: "Ollie",
    lastName: "Murphree",
    dob: "1970-07-01",
    income: 34000,
    employment: "full-time",
    houseNumber: 700,
    postCode: "BS14 9PR",
  },
  {
    id: 2,
    title: "Miss",
    firstName: "Elizabeth",
    lastName: "Edmundson",
    dob: "1984-06-26",
    income: 17000,
    employment: "student",
    houseNumber: 177,
    postCode: "PH12 8UW",
  },
  {
    id: 3,
    title: "Mr",
    firstName: "Trevor",
    lastName: "Rieck",
    dob: "1990-09-07",
    income: 15000,
    employment: "part-time",
    houseNumber: 343,
    postCode: "TS25 2NF",
  },
];

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});

describe("Eligibility Function", () => {
  test("return correct length of eligible cards", () => {
    expect(checkEligibility(mockUsers[0], mockCards).length).toEqual(2);
    expect(checkEligibility(mockUsers[1], mockCards).length).toEqual(3);
    expect(checkEligibility(mockUsers[2], mockCards).length).toEqual(1);
  });
});

// jest.mock("axios");
// describe("API", () => {
//   it("returns eligible card", async () => {
//     axios.post.mockResolvedValue({
//       cards: [
//         {
//           id: 2,
//           label: "Anywhere Card",
//           apr: 0.339,
//           balanceTransferOfferDuration: 0,
//           purchaseOfferDuration: 0,
//           credit: 300,
//         },
//         {
//           id: 3,
//           label: "Liquid Card",
//           apr: 0.339,
//           balanceTransferOfferDuration: 12,
//           purchaseOfferDuration: 6,
//           credit: 3000,
//         },
//       ],
//     });
//   });
// });

describe("async postEligibility function", () => {
  it("fetched anywhere card", async () => {
    expect.assertions(1);

    const data = await postEligibilityInfo(mockUsers[0]);
    expect(data.cards).toHaveLength(2);
  });

  it("fetched anywhere and liquid cards", async () => {
    expect.assertions(1);

    const data = await postEligibilityInfo(mockUsers[2]);
    expect(data.cards).toHaveLength(1);
  });

  it("fetched anywhere, liquid cards and student card", async () => {
    expect.assertions(1);

    const data = await postEligibilityInfo(mockUsers[1]);
    expect(data.cards).toHaveLength(3);
  });
});
