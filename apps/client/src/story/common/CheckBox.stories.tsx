import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from '@tiki/ui';

const meta = {
  title: 'Common/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isChecked: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    isChecked: false,
    onChange: () => {},
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
