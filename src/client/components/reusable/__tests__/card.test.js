import React from "react";
import { mount } from "enzyme";

import Card from "../card";

test("that it mounts with no errors", () => {
  const result = mount(<Card />);
  expect(result).toBeTruthy();
});
