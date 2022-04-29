import { fireEvent, render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import { MessageOne } from "../Messages";
import One from "./One";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("Renders header", () => {
  render(<One />);
  const header = screen.getByText(MessageOne.TITLE);
  expect(header).toBeInTheDocument();
});

test("Enable button", () => {
  render(<One />);
  const button = screen.getByText(MessageOne.BUTTON);
  const header = screen.getByText(MessageOne.TITLE);
  fireEvent.click(button);
  expect(header).toBeInTheDocument();
});
