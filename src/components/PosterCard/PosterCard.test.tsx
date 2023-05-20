import { render, screen } from "@testing-library/react";
import PosterCard from "./PosterCard";

test("renders input component correctly with aria label", () => {
  render(<PosterCard imgURL="test" label="testImage" />);
  const thumnailCardElement = screen.getByAltText("testImage");

  expect(thumnailCardElement).toBeInTheDocument();
});
