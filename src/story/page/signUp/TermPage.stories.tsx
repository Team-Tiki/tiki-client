import type { Meta, StoryObj } from '@storybook/react';

import TermPage from '@/page/signUp/index/TermPage';

const meta = {
  title: 'page/signUp/TermPage',
  component: TermPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TermPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
