import type { Meta, StoryObj } from '@storybook/react';

import ArrowLeft from '@/common/asset/svg/ic_arrow_left_white.svg?react';
import ArrowRight from '@/common/asset/svg/ic_arrow_right_white.svg?react';

import Switch from '@/shared/component/Switch/Switch';

const meta = {
  title: 'Shared/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default'],
    },
    LeftIcon: {
      control: { type: 'radio' },
      options: [<ArrowLeft />, <ArrowRight />],
    },
    ClickedLeftIcon: {
      control: { type: 'radio' },
      options: [<ArrowLeft />, <ArrowRight />],
    },
    RightIcon: {
      control: { type: 'radio' },
      options: [<ArrowLeft />, <ArrowRight />],
    },
    ClickedRightIcon: {
      control: { type: 'radio' },
      options: [<ArrowLeft />, <ArrowRight />],
    },
  },
  args: {
    variant: 'default',
    LeftIcon: <ArrowLeft />,
    RightIcon: <ArrowRight />,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    LeftIcon: <ArrowLeft />,
    RightIcon: <ArrowRight />,
    onClick: () => {},
  },
};

export const Checked: Story = {
  args: {
    variant: 'checked',
    LeftIcon: <ArrowLeft />,
    RightIcon: <ArrowRight />,
    onClick: () => {},
  },
};
