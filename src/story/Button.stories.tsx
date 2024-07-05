import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/common/component/Button/Button';

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
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    color: 'black',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Action: Story = {
  args: {
    variant: 'action',
  },
};
