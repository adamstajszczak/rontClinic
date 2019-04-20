import React from "react";
import { mount, shallow, render } from "enzyme";
import FlexWrapper from "./index";

it("Powinno wyrengerować komponent bez properties", () => {
  const component = shallow(<FlexWrapper />);

  expect(component).toMatchSnapshot();
});

it("Powinno wyrenderować divy w rozstawienu w zależnosci od justifyContent", () => {
  const strings = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ];

  strings.map(string => {
    const component = shallow(
      <FlexWrapper justifyContent={string}>
        <div />
        <div />
      </FlexWrapper>
    );
    expect(component).toMatchSnapshot();
  });
});
