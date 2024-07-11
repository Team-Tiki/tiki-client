import LoginPage from '@/page/login/LoginPage';
import type { Meta, StoryObj } from '@storybook/react';

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
