import { chipStyle, clubProfileStyle, containerStyle } from '@/page/showcase/index/ShowcasePage.style';
import BannerSlider from '@/page/showcase/index/component/BannerSlider/BannerSlider';
import CategoryChip from '@/page/showcase/index/component/CategoryChip/CategoryChip';
import ClubProfileCard from '@/page/showcase/index/component/ClubProfileCard/ClubProfileCard';
import { CATEGORY } from '@/page/showcase/index/constant/category';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import useCategoryListQuery from '@/shared/hook/useCategoryListQuery';
import { useClubListQuery } from '@/shared/hook/useClubListQuery';

const ShowcasePage = () => {
  const navi = useNavigate();
  const [selectedChip, setSelectedChip] = useState<string>('전체');

  const { data: clubs } = useClubListQuery();

  const { data: categoryList } = useCategoryListQuery();

  const handleChipClick = (category: string) => {
    setSelectedChip(category);
  };

  return (
    <div css={containerStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '2.4rem', width: '100%' }}>
        <Heading tag="H4" css={{ fontWeight: 600 }}>
          우리 학교 동아리
        </Heading>
        <div css={{ width: '100%', minWidth: '25rem' }}>
          <BannerSlider />
        </div>
      </Flex>

      <section css={chipStyle}>
        {categoryList &&
          categoryList.map((category) => (
            <CategoryChip
              key={category}
              onClick={() => handleChipClick(category)}
              isSelected={selectedChip === category}>
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
