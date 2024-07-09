import DaySection from '@/page/archiving/component/DaySection/DaySection';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/Archiving/DaySection',
  component: DaySection,
  parameters: {
    layout: 'centered',
  },
  args: {
    day: 1,
    isClicked: false,
  },
  argTypes: {
    day: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof DaySection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
