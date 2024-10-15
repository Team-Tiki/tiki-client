import type { Meta, StoryObj } from '@storybook/react';

import LoginPage from '@/page/login/index/LoginPage';

const meta = {
  title: 'Page/Login/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
