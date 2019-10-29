import React from "react";
import { render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";

import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Button from "../Button";

afterEach(cleanup);

it("render without any crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label={"Click Me"} />);
  expect(getByTestId("button-testid")).toHaveTextContent("Click Me");
});

it("renders another button correctly", () => {
  const { getByTestId } = render(<Button label={"Save Me"} />);
  expect(getByTestId("button-testid")).toHaveTextContent("Save Me");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(<Button label={"Save Snapshot"}></Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
