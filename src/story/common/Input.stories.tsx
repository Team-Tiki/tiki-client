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
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium', 'small'],
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
    size: 'medium',
    label: '라벨입니다.',
    placeholder: '입력해주세요.',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: ({ variant, isError, placeholder }) => (
    <ul>
      <li>
        <h6>Large</h6>
        <Input size="large" variant={variant} isError={isError} placeholder={placeholder} />
      </li>
      <li>
        <h6>Medium</h6>
        <Input size="medium" variant={variant} isError={isError} placeholder={placeholder} />
      </li>
      <li>
        <h6>Small</h6>
        <Input size="small" variant={variant} isError={isError} placeholder={placeholder} />
      </li>
    </ul>
  ),
  argTypes: {
    size: {
      control: false,
    },
  },
};

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

export const Underline: Story = {
  args: {
    variant: 'underline',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Colored: Story = {
  args: {
    variant: 'colored',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Error: Story = {
  args: {
    isError: true,
  },
  argTypes: {
    isError: {
      control: false,
    },
  },
};
