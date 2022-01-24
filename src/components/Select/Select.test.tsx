import React from "react";
import { shallow } from "enzyme";
import Select from "./index";

it("renders without crashing", () => {
  expect(shallow(<Select label="Test label" />)).toMatchSnapshot();
});
