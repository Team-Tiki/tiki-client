import type { Meta, StoryObj } from '@storybook/react';

import SearchIc from '@/common/asset/svg/ic_search.svg?react';
import Input from '@/common/component/Input/Input';

const meta = {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    supportingText: {
      control: { type: 'text' },
    },
  },
  args: {
    label: '라벨입니다.',
    placeholder: '입력해주세요.',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  argTypes: {},
};

export const Search: Story = {
  args: {
    LeftIcon: <SearchIc width={16} height={16} />,
    filled: false,
  },
  argTypes: {
    filled: {
      control: { type: 'boolean' },
    },
  },
};

export const Filled: Story = {
  args: {
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
    supportingText: 'this is supporingText',
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
