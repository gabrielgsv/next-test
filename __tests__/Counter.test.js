import React from "react";
import { shallow } from "enzyme";

import Counter from "../pages/Counter";

describe("Testing Counter Component", () => {
  it("shold render correctly", () => {
    const wrapper = shallow(<Counter count={5} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ count: 10 });
    expect(wrapper).toMatchSnapshot();
  });
});
