import type { Meta, StoryObj } from '@storybook/react';

import Logo from '@/common/asset/svg/logo_tiki_md.svg?react';
import Menu from '@/common/component/Menu/Menu';
import MenuItem from '@/common/component/Menu/MenuItem/MenuItem';

const meta = {
  title: 'Common/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary'],
    },
  },
  args: {
    variant: 'primary',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    isOpen: true,
    children: (
      <>
        <MenuItem
          variant="primary"
          LeftIcon={<Logo width={16} height={16} />}
          onSelect={() => console.log('This is 1st')}>
          1st primary item
        </MenuItem>
        <MenuItem
          variant="primary"
          LeftIcon={<Logo width={16} height={16} />}
          onSelect={() => console.log('This is 2nd')}>
          2nd primary item
        </MenuItem>
      </>
    ),
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};
