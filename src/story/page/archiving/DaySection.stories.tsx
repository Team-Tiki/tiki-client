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
    onDayClick: () => {},
  },
  argTypes: {
    day: {
      control: {
        type: 'number',
      },
    },
    isClicked: {
      control: {
        type: 'boolean',
      },
    },
    isEven: {
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
    isClicked: false,
    isEven: false,
    onDayClick: () => {},
  },
};
