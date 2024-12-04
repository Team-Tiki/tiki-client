import type { Meta, StoryObj } from '@storybook/react';

import Item from '@/shared/component/SideNavBar/Item/Item';

const meta = {
  title: 'Shared/SideNavBarItem',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isClicked: {
      control: { type: 'boolean' },
    },
  },

  args: {
    variant: {
      type: 'team',
      logoUrl: '',
      hoverMessage: '팀 프로필',
    },
    isClicked: false,
    onLogoClick: () => {},
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultItem: Story = {
  render: (args) => (
    <div css={{ position: 'relative' }}>
      <Item {...args} />
    </div>
  ),
};
