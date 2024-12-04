import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@tiki/ui';

const meta = {
  title: 'Common/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    children: 'Label',
    id: 'label',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
