import { fireEvent, render, screen } from "@testing-library/react";
import InputComponent from "./inputComponent";

const onChangeHandler = jest.fn();

test("renders input component correctly with aria label", () => {
  render(
    <InputComponent ariaLabel="inputBox" onChangeHandler={onChangeHandler} />
  );
  const SearchComponentElement = screen.getByLabelText("inputBox");

  expect(SearchComponentElement).toBeInTheDocument();
});

test("renders searched value correctly on onchange handler", async () => {
  render(<InputComponent onChangeHandler={onChangeHandler} />);
  const SearchComponentElement = screen.getByRole("textbox");

  fireEvent.change(SearchComponentElement, { target: { value: "test" } });
  expect(SearchComponentElement).toHaveValue("test");
});
