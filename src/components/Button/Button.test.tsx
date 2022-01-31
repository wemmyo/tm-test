import React from "react";
import { shallow } from "enzyme";

import Button from "./index";

const wrapper = shallow(<Button title="submit" />);

it("renders without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});
it("renders correct button title", () => {
  expect(wrapper.text()).toEqual("submit");
});
