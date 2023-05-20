import { render, screen } from "@testing-library/react";
import ThumbnailCard from "./ThumbnailCard";

test("renders input component correctly with aria label", () => {
  render(<ThumbnailCard />);
  const thumnailCardElement = screen.getByText("Image");

  expect(thumnailCardElement).toBeInTheDocument();
});
