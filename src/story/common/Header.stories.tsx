import type { Meta, StoryObj } from '@storybook/react';

import Header from '@/common/component/Header/Header';

const meta = {
  title: 'Common/UserHeader',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div css={{ width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginHeader: Story = {
  args: {
    isLogin: false,
  },
};

export const LogoutHeader: Story = {
  args: {
    isLogin: true,
  },
};
