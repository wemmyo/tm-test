import React from "react";
import { shallow } from "enzyme";
import EligibilityCheck from "./";
import { formErrors } from "./functions";

let wrapper = shallow(<EligibilityCheck />);

it("renders without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("checks for form errors", () => {
  const validMockData = {
    firstName: "David",
    income: "9000",
    employment: "student",
  };
  const invalidMockData = {
    firstName: "",
    income: "",
    employment: "",
  };
  expect(formErrors(validMockData, jest.fn())).toBe(false);
  expect(formErrors(invalidMockData, jest.fn())).toBe(true);
});
