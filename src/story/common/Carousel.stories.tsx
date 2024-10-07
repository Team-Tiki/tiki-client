import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { MouseEvent } from 'react';

import img1 from '@/common/asset/img/advBannerClub1.png';
import img2 from '@/common/asset/img/advBannerClub2.png';
import img3 from '@/common/asset/img/advBannerClub3.png';
import ArrowLeft from '@/common/asset/svg/arrow-left.svg?react';
import ArrowRight from '@/common/asset/svg/arrow-right.svg?react';
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
  args: {
    children: [],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const shadowStyle = css({
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

const arrowStyle = css({
  position: 'absolute',
  top: 0,
  bottom: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  margin: 'auto 0',

  width: '3.2rem',
  height: '3.2rem',

  zIndex: theme.zIndex.overlayBottom,

  border: 'none',
  borderRadius: '16px',

  background: 'rgb(255,255,255,0.3)',

  cursor: 'pointer',
});

export const Default: Story = {
  render: () => {
    const arr = Array.from({ length: 10 }).map((_, i) => i + 1);

    return (
      <Carousel
        autoLoop={true}
        renderedLeftArrow={(onClick: (e: MouseEvent<HTMLButtonElement>) => void) => (
          <button onClick={onClick} css={[arrowStyle, { left: '1.6rem' }]}>
            <ArrowLeft width="1.6rem" height="1.6rem" />
          </button>
        )}
        renderedRightArrow={(onClick: (e: MouseEvent<HTMLButtonElement>) => void) => (
          <button onClick={onClick} css={[arrowStyle, { right: '1.6rem' }]}>
            <ArrowRight width="1.6rem" height="1.6rem" />
          </button>
        )}>
        {arr.map((num, idx) => (
          <Carousel.Item css={shadowStyle} key={num} index={idx}>
            <div css={{ position: 'absolute', padding: '3.2rem' }}>
              <Heading css={{ color: 'white' }}>{num}번째 슬라이드</Heading>
              <Button css={{ width: '200px' }} variant="primary">
                이동하기
              </Button>
            </div>
            <img
              css={{ objectFit: 'cover' }}
              src={idx % 3 === 0 ? img1 : idx % 3 === 1 ? img2 : img3}
              alt={`img${num}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  },
};
