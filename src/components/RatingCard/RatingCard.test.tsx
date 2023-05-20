import { render, screen } from "@testing-library/react";
import RatingCard from "./RatingCard";

test("renders input component correctly with aria label", () => {
  render(<RatingCard rating="7.9" cardTitle="title" imgSrc="testsrc" />);
  const thumnailCardElement = screen.getByText("title");

  expect(thumnailCardElement).toBeInTheDocument();
});
