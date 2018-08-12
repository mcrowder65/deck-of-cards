import React from "react";
import { mount } from "enzyme";

import Comp from "../icon";

test("that it mounts with no errors", () => {
  const result = mount(<Comp />);
  expect(result).toBeTruthy();
});
