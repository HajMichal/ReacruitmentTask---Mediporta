import { Loader } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Loader",
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "gray",
  },
};
