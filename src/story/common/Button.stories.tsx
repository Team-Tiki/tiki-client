import type { Meta, StoryObj } from '@storybook/react';

import Icon from '@/common/asset/svg/ic_check.svg?react';
import Button, { ButtonProps } from '@/common/component/Button/Button';

const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'outline', 'underline'],
    },
    size: {
      control: { type: 'radio' },
      options: ['xLarge', 'large', 'medium', 'small', 'xSmall'],
    },
    children: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Button',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const createButtonStory = (variant: ButtonProps['variant']) => ({
  args: {
    variant,
  },
  argsType: {
    variant: {
      control: false,
    },
  },
});

export const Primary: Story = createButtonStory('primary');

export const Secondary: Story = createButtonStory('secondary');

export const Tertiary: Story = createButtonStory('tertiary');

export const Outline: Story = createButtonStory('outline');

export const Underline: Story = createButtonStory('underline');

export const WithIcon: Story = {
  args: {
    variant: 'tertiary',
    children: (
      <>
        <Icon />
        Icon
      </>
    ),
  },
};
