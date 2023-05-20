import { fireEvent, render, screen } from "@testing-library/react";
import InputComponent from "./inputComponent";

const onChangeHandler = jest.fn();

test("renders input component correctly with aria label", () => {
  render(
    <InputComponent ariaLabel="inputBox" onChangeHandler={onChangeHandler} />
  );
  const InputComponentElement = screen.getByLabelText("inputBox");

  expect(InputComponentElement).toBeInTheDocument();
});

test("renders searched value correctly on onchange handler", async () => {
  render(<InputComponent onChangeHandler={onChangeHandler} />);
  const InputComponentElement = screen.getByRole("textbox");

  fireEvent.change(InputComponentElement, { target: { value: "test" } });
  expect(InputComponentElement).toHaveValue("test");
});
