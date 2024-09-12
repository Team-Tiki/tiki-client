import type { Meta, StoryObj } from '@storybook/react';

import LandingPage from '@/page/landing/LandingPage';

const meta = {
  title: 'page/LandingPage',
  component: LandingPage,

  args: {
    title: '동아리 일정과 문서 관리하기',
    description:
      '기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명 기능 설명',
  },
  argTypes: {},
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
