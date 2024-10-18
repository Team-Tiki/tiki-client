import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Grid from '@/common/asset/svg/ic_grid.svg?react';
import List from '@/common/asset/svg/ic_list.svg?react';
import ListChecked from '@/common/asset/svg/ic_list_checked.svg?react';
import Switch from '@/common/component/Switch/Switch';

const meta = {
  title: 'Common/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isChecked: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isChecked: true,
    LeftIcon: List,
    RightIcon: Grid,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: 'left',
    isChecked: true,
    LeftIcon: List,
    RightIcon: Grid,
    onSwitchChange: () => {},
  },
};

export const StrokeIcon: Story = {
  render: () => {
    const [status, setStatus] = useState<'left' | 'right'>('left');
    return <Switch status={status} LeftIcon={List} RightIcon={Grid} onSwitchChange={setStatus} />;
  },
  args: {
    status: 'left',
    isChecked: true,
    LeftIcon: List,
    ClickedLeftIcon: ListChecked,
    RightIcon: Grid,
    onSwitchChange: () => {},
  },
};
