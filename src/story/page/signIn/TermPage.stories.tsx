import TermPage from '@/page/signUp/index/TermPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/signIn/TermPage',
  component: TermPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TermPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
