import type { Meta, StoryObj } from '@storybook/react';

import Icon from '@/common/asset/svg/ic_check.svg?react';
import CommandButton from '@/common/component/CommandButton/CommandButton';

const meta = {
  title: 'Common/CommandButton',
  component: CommandButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'tertiary', 'outline'],
    },
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium', 'small'],
    },
    keyboard: {
      control: {
        type: 'text',
      },
    },
    isCommand: {
      control: {
        type: 'boolean',
      },
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
} satisfies Meta<typeof CommandButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const createCommandButtonStory = (keyboard: string, variant: 'primary' | 'tertiary' | 'outline'): Story => ({
  args: {
    variant,
    keyboard,
  },
  argTypes: {
    variant: {
      control: 'radio',
    },
  },
});

export const Primary: Story = createCommandButtonStory('T', 'primary');

export const Tertiary: Story = createCommandButtonStory('T', 'tertiary');

export const Outline: Story = createCommandButtonStory('T', 'outline');

export const WithIcon: Story = {
  args: {
    variant: 'tertiary',
    children: (
      <>
        <Icon />
        Icon
      </>
    ),
    keyboard: 'T',
  },
};
