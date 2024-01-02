import type { Meta, StoryObj } from "@storybook/react";
import { BasicButton } from "@/components/Buttons/BasicButton";

const meta = {
  title: "Buttons/BasicButton",
  component: BasicButton,
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalButton: Story = {
  args: {
    text: "LearnerChainについて",
    color: "success",
    variant: "contained",
    height: "50px",
    className: "-shadow",
  },
};
