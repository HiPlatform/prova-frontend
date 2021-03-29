import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ListItem } from "../components";

Enzyme.configure({ adapter: new Adapter() });

describe("ListItem tests", () => {
  const item = {
    id: "2469bdab-23b5-4cb8-90c9-c609a49410b0",
    name: "Richard Paul M.",
    children: {},
  };

  it("Renders the <ListItem /> component", () => {
    const wrapper = shallow(
      <ListItem item={item} children={item.children} checked={false} />
    );

    expect(wrapper.find(".item")).toHaveLength(1);
  });
});
