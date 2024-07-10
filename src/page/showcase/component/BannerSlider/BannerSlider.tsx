/* eslint-disable import/no-extraneous-dependencies */
import AdvBanner from '@/page/showcase/component/AdvBanner/AdvBanner';
import { ADVBANNER } from '@/page/showcase/constant/dummy';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Slider from 'react-slick';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <AdvBanner
        title={ADVBANNER[0].name}
        detail={ADVBANNER[0].overview}
        imageUrl={ADVBANNER[0].imageUrl}
        externUrl={''}
      />
      <AdvBanner
        title={ADVBANNER[1].name}
        detail={ADVBANNER[1].overview}
        imageUrl={ADVBANNER[1].imageUrl}
        externUrl={''}
      />
      <AdvBanner
        title={ADVBANNER[2].name}
        detail={ADVBANNER[2].overview}
        imageUrl={ADVBANNER[2].imageUrl}
        externUrl={''}
      />
      <AdvBanner
        title={ADVBANNER[3].name}
        detail={ADVBANNER[3].overview}
        imageUrl={ADVBANNER[3].imageUrl}
        externUrl={''}
      />
    </Slider>
  );
};

export default BannerSlider;
/*

*/
