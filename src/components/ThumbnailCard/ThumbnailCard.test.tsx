import { render, screen } from "@testing-library/react";
import ThumbnailCard from "./ThumbnailCard";

test("renders input component correctly with aria label", () => {
  render(<ThumbnailCard cardTitle="title" imgSrc="testsrc" />);
  const thumnailCardElement = screen.getByText("title");

  expect(thumnailCardElement).toBeInTheDocument();
});
