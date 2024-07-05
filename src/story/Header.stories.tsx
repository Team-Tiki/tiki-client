import type { Meta, StoryObj } from '@storybook/react';

import Header from '@/common/component/Header/Header';

const meta = {
  title: 'Common/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
  },
  argTypes: {
    childr en: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
