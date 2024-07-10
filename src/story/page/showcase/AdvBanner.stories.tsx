import AdvBanner from '@/page/showcase/component/AdvBanner/AdvBanner';
import type { Meta, StoryObj } from '@storybook/react';

import Logo from '@/common/asset/svg/calendar.svg';

const meta = {
  title: 'page/showcase/AdvBanner',
  component: AdvBanner,

  args: {
    title: 'TikiTikiTikiTikiTikiTikiTiki',
    detail: '동아리 모집 마감까지 D-3동아리 모집 마감까지 D-3동아리 모집 마감까지 D-3',
    imageUrl: Logo,
    externUrl: '',
  },
  argTypes: {},
} satisfies Meta<typeof AdvBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
