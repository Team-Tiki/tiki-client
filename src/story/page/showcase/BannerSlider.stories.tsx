import BannerSlider from '@/page/showcase/component/BannerSlider/BannerSlider';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/showcase/BannerSlider',
  component: BannerSlider,

  args: {},
  argTypes: {},
} satisfies Meta<typeof BannerSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
