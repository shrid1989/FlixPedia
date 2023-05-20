import type { Meta, StoryObj } from "@storybook/react";

import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";

const meta: Meta<typeof ThumbnailCard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ThumbnailCard",
  component: ThumbnailCard,
};

export default meta;
type Story = StoryObj<typeof ThumbnailCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    cardTitle: "title",
    cardSubTitle: "sub title",
    imgSrc:
      "https://fastly.picsum.photos/id/983/200/200.jpg?hmac=dWGIQKhPUTlF4pkeYDou10SJkQTJDRGf4usmJS38cNY",
  },
};
