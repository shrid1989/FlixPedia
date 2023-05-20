import type { Meta, StoryObj } from "@storybook/react";

import RatingCard from "./RatingCard";

const meta: Meta<typeof RatingCard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "RatingCard",
  component: RatingCard,
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    cardTitle: "Movie Title",
    cardSubTitle: "Action/Drama",
    rating: "7.8",
    imgSrc:
      "https://fastly.picsum.photos/id/983/200/200.jpg?hmac=dWGIQKhPUTlF4pkeYDou10SJkQTJDRGf4usmJS38cNY",
  },
};
