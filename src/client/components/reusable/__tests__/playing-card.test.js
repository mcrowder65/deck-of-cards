import React from "react";
import { mount } from "enzyme";

import Comp from "../playing-card";

test("that it mounts with no errors", () => {
  const result = mount(<Comp />);
  expect(result).toBeTruthy();
});
