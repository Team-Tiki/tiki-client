import MonthHeader from '@/page/Archiving/component/MonthHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/MonthHeader',
  component: MonthHeader,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div css={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
  args: {},
  argTypes: {
    variant: {
      control: false,
    },
  },
} satisfies Meta<typeof MonthHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
