import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import img1 from '@/common/asset/img/advBannerClub1.png';
import img2 from '@/common/asset/img/advBannerClub2.png';
import img3 from '@/common/asset/img/advBannerClub3.png';
import Button from '@/common/component/Button/Button';
import Carousel from '@/common/component/Carousel/Carousel';
import Heading from '@/common/component/Heading/Heading';
import { theme } from '@/common/style/theme/theme';

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

export const shadowStyle = css({
  '::before': {
    content: '""',

    position: 'absolute',
    top: 0,
    left: 0,

    width: '16rem',
    height: '100%',

    background: theme.colors.black_shade,
  },
});

export const Default: Story = {
  args: {
    children: [
      <Carousel.Item css={shadowStyle} key={0} index={0}>
        <div style={{ position: 'absolute', top: '1.6rem', left: '1.6rem' }}>
          <Heading css={{ color: 'white' }}>SOPT</Heading>
          <Button css={{ width: '200px' }} variant="primary">
            이동하기
          </Button>
        </div>
        <img src={img1} alt="img1" />
      </Carousel.Item>,
      <Carousel.Item css={shadowStyle} key={1} index={1}>
        <img src={img2} alt="img2" />
      </Carousel.Item>,
      <Carousel.Item key={2} index={2}>
        <img src={img3} alt="img3" />
      </Carousel.Item>,
      <Carousel.Item key={3} index={3}>
        <img src={img1} alt="img1" />
      </Carousel.Item>,
      <Carousel.Item key={4} index={4}>
        <img src={img2} alt="img2" />
      </Carousel.Item>,
      <Carousel.Item key={5} index={5}>
        <img src={img3} alt="img3" />
      </Carousel.Item>,
      <Carousel.Item key={6} index={6}>
        <img src={img1} alt="img1" />
      </Carousel.Item>,
      <Carousel.Item key={7} index={7}>
        <img src={img2} alt="img2" />
      </Carousel.Item>,
      <Carousel.Item key={8} index={8}>
        <img src={img3} alt="img3" />
      </Carousel.Item>,
      <Carousel.Item key={9} index={9}>
        <img src={img1} alt="img1" />
      </Carousel.Item>,
      <Carousel.Item key={10} index={10}>
        <img src={img2} alt="img2" />
      </Carousel.Item>,
      <Carousel.Item key={11} index={11}>
        <img src={img3} alt="img3" />
      </Carousel.Item>,
    ],
  },

  render: (args) => {
    return <Carousel autoLoop={true} {...args} />;
  },
};
