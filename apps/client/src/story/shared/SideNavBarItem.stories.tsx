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
    hoverMessage: {
      control: { type: 'text' },
    },
    isClicked: {
      control: { type: 'boolean' },
    },
    logoUrl: {
      control: { type: 'text' },
    },
  },

  args: {
    hoverMessage: 'Tiki 화이팅',
    logoUrl: '',
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
