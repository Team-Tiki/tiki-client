import type { Meta, StoryObj } from '@storybook/react';

import Select from '@/common/component/Select/Select';

const meta = {
  title: 'Common/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
