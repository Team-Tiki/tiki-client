import type { Meta, StoryObj } from '@storybook/react';
import { IcCheck } from '@tiki/icon';
import { CommandButton } from '@tiki/ui';

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
      options: ['large', 'small'],
    },
    commandKey: {
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
    size: 'large',
    children: 'Button',
    disabled: false,
  },
} satisfies Meta<typeof CommandButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const createCommandButtonStory = (commandKey: string, variant: 'primary' | 'tertiary' | 'outline'): Story => ({
  args: {
    variant,
    commandKey,
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
        <IcCheck />
        Icon
      </>
    ),
    commandKey: 'T',
  },
};
