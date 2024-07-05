import type { Meta, StoryObj } from '@storybook/react';

import Heading from '@/common/component/Heading/Heading';

const meta = {
  title: 'Common/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Heading',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
