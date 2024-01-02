import type { Meta, StoryObj } from "@storybook/react";
import HeaderMain from "@/components/Layouts/HeaderMain";

const meta = {
  title: "Layouts/Header",
  component: HeaderMain,
} satisfies Meta<typeof HeaderMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicHeaderMain: Story = {
  args: {},
};
