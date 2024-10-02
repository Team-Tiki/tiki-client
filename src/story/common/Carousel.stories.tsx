import type { Meta, StoryObj } from '@storybook/react';

import img1 from '@/common/asset/img/advBannerClub1.png';
import img2 from '@/common/asset/img/advBannerClub2.png';
import img3 from '@/common/asset/img/advBannerClub3.png';
import Carousel from '@/common/component/Carousel/Carousel';

const meta = {
  title: 'Common/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Carousel.Item index={0}>
        <p css={{ position: 'absolute', color: 'white', top: '1.6rem', left: '1.6rem' }}>hihi</p>
        <img src={img1} alt="img1" />
      </Carousel.Item>,
      <Carousel.Item index={1}>
        <img src={img2} alt="img2" />
      </Carousel.Item>,
      <Carousel.Item index={2}>
        <img src={img3} alt="img3" />
      </Carousel.Item>,
    ],
  },

  render: (args) => {
    return <Carousel {...args} />;
  },
};
