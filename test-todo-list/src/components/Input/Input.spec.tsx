import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Input } from "components/Input";

test("It should render Input with given placeholder", () => {
  const mockedText = "placeholder";
  render(<Input characters={mockedText} />);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByPlaceholderText(mockedText)).toBeInTheDocument();
});

test("It should call onChange function when user typing", async () => {
  const user = userEvent.setup();
  const mockedChangeHandler = jest.fn();
  const placeholderText = "placeholder";
  render(<Input characters={placeholderText} onChange={mockedChangeHandler} />);
  const input: HTMLInputElement = screen.getByRole("textbox");
  const inputText = "Lorem ipsum";
  await user.type(input, inputText);
  expect(mockedChangeHandler).toHaveBeenCalledTimes(inputText.length);
});

test("It shouldn't call onChange function when user typing, when disabled prop is passed", async () => {
  const user = userEvent.setup();
  const mockedChangeHandler = jest.fn();
  render(<Input onChange={mockedChangeHandler} disabled />);
  const input: HTMLInputElement = screen.getByRole("textbox");
  await user.type(input, "Lorem ipsum");
  expect(mockedChangeHandler).toHaveBeenCalledTimes(0);
});
