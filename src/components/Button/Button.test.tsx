import React from "react";
import { shallow } from "enzyme";
import Button from "./index";

it("renders without crashing", () => {
  expect(shallow(<Button title="submit" />)).toMatchSnapshot();
});
