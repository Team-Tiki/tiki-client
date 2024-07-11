/* eslint-disable import/no-extraneous-dependencies */
import AdvBanner from '@/page/showcase/component/AdvBanner/AdvBanner';
import { arrowStyle, dotsContaierStyle, dotsStyle } from '@/page/showcase/component/BannerSlider/BannerSlider.style';
import { ADVBANNER } from '@/page/showcase/constant/dummy';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Slider from 'react-slick';

import LeftArrow from '@/common/asset/svg/arrow-left-white.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right-white.svg?react';

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} css={[arrowStyle, { right: '1.6rem' }]}>
      <RightArrow />
    </button>
  );
};

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} css={[arrowStyle, { left: '1.6rem' }]}>
      <LeftArrow />
    </button>
  );
};

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <ul className="dotsUl" css={dotsContaierStyle}>
        {dots}
      </ul>
    ),
    dotsStyle: 'dotsUl',
  };
  return (
    <Slider {...settings} css={{ width: '100%' }}>
      {ADVBANNER.map((advBanner) => {
        return (
          <AdvBanner
            title={advBanner.name}
            detail={advBanner.overview}
            imageUrl={advBanner.imageUrl}
            externUrl={advBanner.externUrl}
          />
        );
      })}
    </Slider>
  );
};

export default BannerSlider;
/*

*/
