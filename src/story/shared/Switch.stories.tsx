import type { Meta, StoryObj } from '@storybook/react';

import Grid from '@/common/asset/svg/ic_grid.svg?react';
import List from '@/common/asset/svg/ic_list.svg?react';
import ListChecked from '@/common/asset/svg/ic_list_checked.svg?react';

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
    LeftIcon: List,
    RightIcon: Grid,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isChecked: true,
    LeftIcon: List,
    RightIcon: Grid,
    onClick: () => {},
  },
};

export const StrokeIcon: Story = {
  args: {
    isChecked: true,
    LeftIcon: List,
    CheckedLeftIcon: ListChecked,
    RightIcon: Grid,
    onClick: () => {},
  },
};
