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
  },
  argTypes: {
    day: {
      control: {
        type: 'number',
      },
    },
    isEven: {
      control: {
        type: 'boolean',
      },
    },
    isToday: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof DaySection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    day: 1,
    isEven: false,
    isToday: false,
  },
};
