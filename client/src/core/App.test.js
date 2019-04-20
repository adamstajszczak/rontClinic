import React from "react";
import ReactDOM from "react-dom";
import { mount, shallow, render } from "enzyme";
import App from "./App";

describe("App", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
});
