import { chipStyle, clubProfileStyle, containerStyle } from '@/page/showcase/ShowcasePage.style';
import BannerSlider from '@/page/showcase/component/BannerSlider/BannerSlider';
import CategoryChip from '@/page/showcase/component/CategoryChip/CategoryChip';
import ClubProfileCard from '@/page/showcase/component/ClubProfileCard/ClubProfileCard';
import { CATEGORY } from '@/page/showcase/constant/category';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import { useClubListQuery } from '@/shared/hook/useClubListQuery';

const ShowcasePage = () => {
  const navi = useNavigate();
  const [selectedChip, setSelectedChip] = useState<string>('전체');

  const { data: clubs } = useClubListQuery();

  const handleChipClick = (category: string) => {
    setSelectedChip(category);
  };

  return (
    <div css={containerStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '2.4rem', width: '100%' }}>
        <Heading tag="H4" css={{ fontWeight: 600 }}>
          우리 학교 동아리
        </Heading>
        <div css={{ width: '100%' }}>
          <BannerSlider />
        </div>
      </Flex>

      <section css={chipStyle}>
        {CATEGORY.map((category) => (
          <CategoryChip key={category} onClick={() => handleChipClick(category)} isSelected={selectedChip === category}>
            {category}
          </CategoryChip>
        ))}
      </section>

      <section css={clubProfileStyle}>
        {clubs &&
          clubs.map((club) => {
            if ((club.teamtype === '건국대학교' && club.category === selectedChip) || selectedChip === '전체') {
              return (
                <ClubProfileCard
                  key={club.name}
                  title={club.name}
                  detail={club.overview || ''}
                  imageUrl={club.imageUrl}
                  onClick={() => {
                    navi('/comingsoon');
                  }}
                />
              );
            }
          })}
      </section>
    </div>
  );
};

export default ShowcasePage;
