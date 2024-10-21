import type { Meta, StoryObj } from '@storybook/react';

import CheckBox from '@/common/component/CheckBox/CheckBox';

const meta = {
  title: 'Common/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    checked: false,
    onChange: () => {},
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
