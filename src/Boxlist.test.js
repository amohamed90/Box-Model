import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Boxlist from "./Boxlist";

function addBox(boxlist, height = "2", width = "2", color = "peachpuff") {
  const heightInput = boxlist.getByLabelText("HEIGHT");
  const widthInput = boxlist.getByLabelText("WIDTH");
  const backgroundInput = boxlist.getByLabelText("BACKGROUND COLOR");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxlist.getByText("Create Box");
  fireEvent.click(button);
}

// smoke test
it("renders without crashing", function () {
  render(<Boxlist />);
});

// snapshot test
it("matches snapshot", function () {
  const boxlist = render(<Boxlist />);
  expect(boxlist.asFragment()).toMatchSnapshot();
});

// test that add box works
it("can add a box to the BoxList", function () {
  const boxlist = render(<Boxlist />);

  expect(boxlist.getByTestId("Boxlist")).toBeEmpty();
  addBox(boxlist);
  expect(boxlist.getByTestId("Boxlist")).not.toBeEmpty();
  //check for the remove button
  //check for style
  const removeButton = boxlist.getByText("X");
  expect(removeButton).toBeInTheDocument();
  expect(boxlist.getByText("X").closest("div")).toHaveStyle(`
    width: 2px;
    height: 2px;
    background-color: peachpuff;
  `);
});

// test that delete box works
it("can delete a box to the BoxList", function () {
  const boxlist = render(<Boxlist />);

  expect(boxlist.getByTestId("Boxlist")).toBeEmpty();
  addBox(boxlist);
  const removeButton = boxlist.getByText("X");
  fireEvent.click(removeButton);
  expect(boxlist.getByTestId("Boxlist")).toBeEmpty();
});