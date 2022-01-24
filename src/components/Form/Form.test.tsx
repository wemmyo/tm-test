import React from "react";
import { shallow } from "enzyme";
import Form from "./index";

it("renders without crashing", () => {
  expect(shallow(<Form />)).toMatchSnapshot();
});
