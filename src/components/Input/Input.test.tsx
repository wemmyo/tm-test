import React from "react";
import { shallow } from "enzyme";
import Input from "./index";

it("renders without crashing", () => {
  expect(shallow(<Input label="Test label" />)).toMatchSnapshot();
});
