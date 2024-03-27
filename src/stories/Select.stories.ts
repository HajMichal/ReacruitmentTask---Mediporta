import { Select } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilterBy: Story = {
  args: {
    label: "Filter by",
    placeholder: "Choose Filter",
    className: "sm:w-1/4 w-full min-w-[100px]",
    data: ["popular", "activity", "name"],
  },
  argTypes: { onChange: { action: "setFilter" } },
};

export const SortBy: Story = {
  args: {
    label: "Order by",
    placeholder: "Choose order",
    className: "sm:w-1/4 w-full min-w-[100px]",
    data: ["desc", "asc"],
  },
  argTypes: { onChange: { action: "setSort" } },
};
