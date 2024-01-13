import type { Meta, StoryObj } from "@storybook/react";
import { BasicChip } from "@/components/Buttons/BasicChip";
import { theme } from "@/utils/themes/muiTheme";

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
    backGroundColor: theme.palette.primary,
  },
};
