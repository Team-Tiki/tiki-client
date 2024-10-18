import type { Meta, StoryObj } from '@storybook/react';

import Input from '@/common/component/Input/Input';

const meta = {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'text'],
    },
    label: {
      control: { type: 'text' },
    },
    supportingText: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'default',
    label: '라벨입니다.',
    placeholder: '입력해주세요.',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Search: Story = {
  args: {
    variant: 'search',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Date: Story = {
  args: {
    variant: 'date',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Filled: Story = {
  args: {
    variant: 'search',
    filled: true,
  },
  argTypes: {
    filled: {
      control: false,
    },
  },
};

export const SupportingText: Story = {
  args: {
    supportingText: 'ddd',
  },
  argTypes: {
    isSuccess: {
      control: { type: 'boolean' },
    },
    isError: {
      control: { type: 'boolean' },
    },
  },
};
