import type { Meta, StoryObj } from '@storybook/react';

import Logo from '@/common/asset/svg/logo_tiki_md.svg?react';
import MenuItem from '@/common/component/Menu/MenuItem/MenuItem';
import MenuList from '@/common/component/Menu/MenuList/MenuList';

const meta = {
  title: 'Common/MenuList',
  component: MenuList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary'],
    },
    isOpen: {
      control: { type: 'boolean' },
    },
    children: {
      control: false,
    },
  },
  args: {
    variant: 'primary',
    isOpen: true,
    children: (
      <>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </>
    ),
  },
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ variant, isOpen }) => (
    <MenuList variant={variant} isOpen={isOpen}>
      <MenuItem LeftIcon={<Logo width={16} height={16} />}>first item</MenuItem>
      <MenuItem LeftIcon={<Logo width={16} height={16} />}>second item</MenuItem>
    </MenuList>
  ),
  args: {
    variant: 'primary',
    isOpen: true,
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};
