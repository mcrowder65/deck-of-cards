import React from "react";
import { mount } from "enzyme";

import Home from "../home";

test("that it renders home without errors", () => {
  const home = mount(<Home />);
  expect(home).toBeTruthy();
});
