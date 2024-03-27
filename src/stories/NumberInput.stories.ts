import { NumberInput } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "NumberInput",
  component: NumberInput,
  argTypes: { onChange: { action: "setpageSize" } },
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Rows count",
    placeholder: "Enter a number...",
    allowDecimal: false,
    allowNegative: false,
    className: "sm:w-1/4 w-full min-w-[100px]",
    step: 1,
    min: 1,
  },
};
