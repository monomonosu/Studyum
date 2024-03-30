import type { Meta, StoryObj } from "@storybook/react";
import { BasicChip } from "@/components/Buttons/BasicChip";

const meta = {
  title: "Buttons/BasicChip",
  component: BasicChip,
} satisfies Meta<typeof BasicChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultChip: Story = {
  args: {
    text: "Studyumについて",
  },
};

export const BlueChip: Story = {
  args: {
    text: "Studyumについて",
    color: "primary",
  },
};

export const GreenChip: Story = {
  args: {
    text: "Studyumについて",
    color: "success",
  },
};

export const RedChip: Story = {
  args: {
    text: "Studyumについて",
    color: "error",
  },
};
