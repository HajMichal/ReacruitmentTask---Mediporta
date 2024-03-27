import TableOfTags from "../components/TableOfTags";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "TableOfTags",
  component: TableOfTags,
  argTypes: { onChange: { action: "setter" } },
} satisfies Meta<typeof TableOfTags>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
