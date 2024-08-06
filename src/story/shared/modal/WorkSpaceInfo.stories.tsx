import type { Meta, StoryObj } from '@storybook/react';

import WorkSpaceInfo from '@/shared/component/createWorkSpaceModal/info/WorkSpaceInfo';

const meta = {
  title: 'page/Modal/WorkSpaceInfo',
  component: WorkSpaceInfo,
  parameters: {
    layout: 'centered',
  },
  args: {
    step: 'name',
    title: '새로운 워크 스페이스 생성하기',
    info: '워크스페이스의 이름을 입력해주세요.',
  },
  argTypes: {},
} satisfies Meta<typeof WorkSpaceInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
