import { Button } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LeftArrow: Story = {
  args: {
    variant: "filled",
    color: "blue",
    children: "<",
  },
  argTypes: { onclick: { action: "decreasePage" } },
};

export const RightArrow: Story = {
  args: {
    variant: "filled",
    color: "blue",
    children: ">",
  },
  argTypes: { onclick: { action: () => "increasePage" } },
};
