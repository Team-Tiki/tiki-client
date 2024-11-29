import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem, MenuList, MenuRoot } from '@tiki/ui';

import Pencil from '@/common/asset/svg/ic_pencil.svg?react';
import { useOverlay } from '@/common/hook';

const meta = {
  title: 'Common/Menu',
  component: MenuRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    onClose: () => {},
    children: (
      <>
        <button>trigger button</button>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
      </>
    ),
  },
} satisfies Meta<typeof MenuRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({}) => {
    const { isOpen, close, toggle } = useOverlay();

    return (
      <MenuRoot onClose={close}>
        <button type="button" onClick={toggle}>
          Trigger
        </button>
        <MenuList isOpen={isOpen} css={{ left: '100%', top: 0 }}>
          <MenuItem LeftIcon={<Pencil width={16} height={16} />} onSelect={toggle}>
            이름 변경
          </MenuItem>
          <MenuItem LeftIcon={<Pencil width={16} height={16} />} onSelect={toggle}>
            휴지통으로 이동
          </MenuItem>
          <MenuItem LeftIcon={<Pencil width={16} height={16} />} onSelect={toggle}>
            폴더 전체 다운로드
          </MenuItem>
        </MenuList>
      </MenuRoot>
    );
  },
  args: {
    onClose: () => {},
  },
  argTypes: {},
};
