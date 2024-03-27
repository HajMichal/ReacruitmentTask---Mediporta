import TopBar from "../components/TopBar";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "TopBar",
  component: TopBar,
  argTypes: { onChange: { action: "setter" } },
} satisfies Meta<typeof TopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
