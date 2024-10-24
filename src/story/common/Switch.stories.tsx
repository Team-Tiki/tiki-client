import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Grid from '@/common/asset/svg/ic_grid.svg?react';
import List from '@/common/asset/svg/ic_list.svg?react';
import Switch from '@/common/component/Switch/Switch';

const meta = {
  title: 'Common/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'radio', options: ['left', 'right'] },
    },
  },
  args: {
    status: 'left',
    onSwitchChange: () => {},
    LeftIcon: { Icon: List, mode: 'stroke' },
    RightIcon: { Icon: Grid, mode: 'fill' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [status, setStatus] = useState<'left' | 'right'>('left');

    return (
      <Switch
        {...args}
        status={status}
        onSwitchChange={() => setStatus((prev) => (prev === 'left' ? 'right' : 'left'))}
      />
    );
  },
};
