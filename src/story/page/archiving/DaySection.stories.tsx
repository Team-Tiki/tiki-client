import DaySection from '@/page/archiving/index/component/DaySection/DaySection';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/Archiving/DaySection',
  component: DaySection,
  parameters: {
    layout: 'centered',
  },
  args: {
    endDay: new Date(),
  },
  argTypes: {
    endDay: {
      control: {
        type: 'date',
      },
    },
  },
} satisfies Meta<typeof DaySection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    endDay: new Date(2024, 0, 2),
  },
};
