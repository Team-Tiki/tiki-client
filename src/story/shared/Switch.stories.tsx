import type { Meta, StoryObj } from '@storybook/react';

import Grid from '@/common/asset/svg/ic_grid.svg?react';
import CheckedGrid from '@/common/asset/svg/ic_grid_checked.svg?react';
import List from '@/common/asset/svg/ic_list.svg?react';
import CheckedList from '@/common/asset/svg/ic_list_checked.svg?react';

import Switch from '@/shared/component/Switch/Switch';

const meta = {
  title: 'Shared/Switch',
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
    LeftIcon: <List width={16} height={16} />,
    ClickedLeftIcon: <CheckedList width={16} height={16} />,
    RightIcon: <Grid width={16} height={16} />,
    ClickedRightIcon: <CheckedGrid width={16} height={16} />,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isChecked: true,
    LeftIcon: <List width={16} height={16} />,
    RightIcon: <Grid width={16} height={16} />,
    onClick: () => {},
  },
};
