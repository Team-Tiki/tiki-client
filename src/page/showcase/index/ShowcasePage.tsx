import { chipStyle, clubProfileStyle, containerStyle } from '@/page/showcase/index/ShowcasePage.style';
import BannerSlider from '@/page/showcase/index/component/BannerSlider/BannerSlider';
import CategoryChip from '@/page/showcase/index/component/CategoryChip/CategoryChip';
import ClubProfileCard from '@/page/showcase/index/component/ClubProfileCard/ClubProfileCard';
import { CATEGORY } from '@/page/showcase/index/constant/category';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

const CLUBDATA = [
  {
    id: 1,
    name: 'SOPT',
    overview:
      '창업/취업 동아리창업/취업 동아리창업/취업 동아리창업/취업 동아리창업/취업 동아리창업/취업 동아리창업/취업 동아리창업/취업 동아리',
    category: '창업/취업',
    teamtype: '건국대학교',
    imageUrl: '',
  },
  {
    id: 2,
    name: 'SOPT2',
    overview: '예술 동아리예술 동아리예술 동아리예술 동아리예술 동아리예술 동아리예술 동아리예술 동아리예술 동아리',
    category: '예술/공연',
    teamtype: '건국대학교',
    imageUrl: '',
  },
  {
    id: 3,
    name: 'SOPT3',
    overview: '봉사 동아리',
    category: '봉사/사회활동',
    teamtype: '건국대학교',
    imageUrl: '',
  },
  {
    id: 4,
    name: 'SOPT4',
    overview: '자연과학 동아리',
    category: '자연과학',
    teamtype: '건국대학교',
    imageUrl: '',
  },
  {
    id: 5,
    name: 'SOPT5',
    overview: '공학 동아리',
    category: '공학',
    teamtype: '건국대학교',
    imageUrl: '',
  },
  {
    id: 6,
    name: 'SOPT6',
    overview: '어학 동아리',
    category: '어학',
    teamtype: '건국대학교',
    imageUrl: '',
  },
  {
    id: 7,
    name: 'SOPT7',
    overview: '종교 동아리',
    category: '종교',
    teamtype: '건국대학교',
    imageUrl: '',
  },
  {
    id: 8,
    name: 'SOPT8',
    overview: '스포츠 동아리',
    category: '스포츠/레저',
    teamtype: '건국대학교',
    imageUrl: '',
  },
  {
    id: 9,
    name: 'SOPT9',
    overview: '스포츠 동아리',
    category: '스포츠/레저',
    teamtype: '건국대학교',
    imageUrl: '',
  },
  {
    id: 10,
    name: 'SOPT10',
    overview: '봉사 동아리',
    category: '봉사/사회활동',
    teamtype: '건국대학교',
    imageUrl: '',
  },
];

const ShowcasePage = () => {
  const navi = useNavigate();
  const [selectedChip, setSelectedChip] = useState<string>('전체');

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
        {CLUBDATA.map((club) => {
          if ((club.teamtype === '건국대학교' && club.category === selectedChip) || selectedChip === '전체') {
            return (
              <ClubProfileCard
                key={club.name}
                title={club.name}
                detail={club.overview}
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
