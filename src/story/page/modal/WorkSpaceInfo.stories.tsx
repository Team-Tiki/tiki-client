import WorkSapceInfo from '@/page/modal/component/workspace/info/WorkSpaceInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/Modal/WorkSapce/Info',
  component: WorkSapceInfo,

  args: {
    step: 1,
    title: '새로운 워크 스페이스 생성하기',
    info: '워크스페이스의 이름을 입력해주세요.',
  },
  argTypes: {},
} satisfies Meta<typeof WorkSapceInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
