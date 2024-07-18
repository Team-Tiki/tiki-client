/* eslint-disable import/no-extraneous-dependencies */
import AdvBanner from '@/page/showcase/index/component/AdvBanner/AdvBanner';
import { arrowStyle, dotsContaierStyle } from '@/page/showcase/index/component/BannerSlider/BannerSlider.style';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ReactNode, useMemo } from 'react';
import Slider from 'react-slick';

import LeftArrow from '@/common/asset/svg/arrow-left-white.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right-white.svg?react';

const ADVBANNER = [
  {
    id: 1,
    name: 'SOPT',
    overview: '동아리 모집 마감까지 D-3',
    category: '창업/취업',
    imageUrl: 'src/common/asset/img/advBannerClub1.png',
    externUrl: 'https://www.sopt.org/recruit',
  },
  {
    id: 2,
    name: '유닛',
    overview: '동아리 모집 마감까지 D-6',
    category: '스포츠/레저',
    imageUrl: 'src/common/asset/img/advBannerClub2.png',
    externUrl: 'https://www.sopt.org/recruit',
  },
  {
    id: 3,
    name: 'TRIPEL',
    overview: '동아리 모집 마감까지 D-5',
    category: '문화/친목',
    imageUrl: 'src/common/asset/img/advBannerClub3.png',
    externUrl: 'https://www.sopt.org/recruit',
  },
  {
    id: 4,
    name: '청춘처럼',
    overview: '동아리 모집 마감까지 D-1',
    category: '봉사/사회활동',
    imageUrl: 'src/common/asset/img/advBannerClub4.png',
    externUrl: 'https://www.sopt.org/recruit',
  },
];

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => {
  //const { onClick } = props;
  return (
    <button type="button" onClick={onClick} css={[arrowStyle, { right: '1.6rem' }]}>
      <RightArrow width="1.6rem" height="1.6rem" />
    </button>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  //const { onClick } = props;
  return (
    <button type="button" onClick={onClick} css={[arrowStyle, { left: '1.6rem' }]}>
      <LeftArrow width="1.6rem" height="1.6rem" />
    </button>
  );
};

const BannerSlider = () => {
  const settings = useMemo(() => {
    return {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: (dots: ReactNode) => (
        <ul className="dotsUl" css={dotsContaierStyle}>
          {dots}
        </ul>
      ),
      dotsStyle: 'dotsUl',
    };
  }, []);

  return (
    <Slider {...settings}>
      {ADVBANNER.map((advBanner) => (
        <AdvBanner
          key={advBanner.id}
          title={advBanner.name}
          detail={advBanner.overview}
          imageUrl={advBanner.imageUrl}
          externUrl={advBanner.externUrl}
        />
      ))}
    </Slider>
  );
};

export default BannerSlider;
