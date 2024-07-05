import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/common/component/Button/Button';

import Add from '../common/asset/svg/add.svg';

const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
    size: 'small',
  },
  argTypes: {
    variant: {
      control: false,
    },
    children: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'radio',
      },
    },
    icon: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'xSmall',
    color: 'black',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'medium',
    icon: <Add />,
    color: 'blue',
  },
};
