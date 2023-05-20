import { render, screen } from "@testing-library/react";
import Button from "./Button";
const btnHandler = jest.fn();

test("renders input component correctly with aria label", () => {
  render(
    <Button
      varient="primary"
      onClickHandler={btnHandler}
      buttonText="testButton"
    />
  );
  const ButtonElement = screen.getByText("testButton");

  expect(ButtonElement).toBeInTheDocument();
});
