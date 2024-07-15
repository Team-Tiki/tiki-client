import Overview from '@/page/landing/component/Overview/Overview';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/Landing/Overview',
  component: Overview,

  args: {
    title: '동아리 일정과 문서 관리하기',
    description:
      '기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명',
  },
  argTypes: {},
} satisfies Meta<typeof Overview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
