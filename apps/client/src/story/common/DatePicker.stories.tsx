import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@tiki/ui';

const meta: Meta<typeof DatePicker> = {
  title: 'Common/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleDatePicker: Story = {
  render: () => <DatePicker label="데이트피커" variant="single" triggerWidth="10.3rem" />,
};

export const RangeDatePicker: Story = {
  render: () => <DatePicker label="데이트피커" variant="range" triggerWidth="10.3rem" />,
};
