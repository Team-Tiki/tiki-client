import type { Meta, StoryObj } from '@storybook/react';

import Logo from '@/shared/component/SideNavBar/Logo';

const meta = {
  title: 'Shared/SideNavBarLogo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isActive: {
      control: { type: 'boolean' },
    },
  },

  args: {
    to: '#',
    name: '티키',
    isActive: false,
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultItem: Story = {
  render: (args) => (
    <div css={{ position: 'relative' }}>
      <Logo {...args} />
    </div>
  ),
};
