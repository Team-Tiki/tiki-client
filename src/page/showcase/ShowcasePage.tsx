import { clubProfileStyle, containerStyle } from '@/page/showcase/ShowcasePage.style';
import BannerSlider from '@/page/showcase/component/BannerSlider/BannerSlider';
import CategoryChip from '@/page/showcase/component/CategoryChip/CategoryChip';
import ClubProfileCard from '@/page/showcase/component/ClubProfileCard/ClubProfileCard';
import { CATEGORY } from '@/page/showcase/constant/category';

import { useState } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

const CLUBDATA = [
  {
    id: 1,
    name: 'SOPT',
    overview: '창업/취업 동아리',
    category: '창업/취업',
    teamtype: '건국대학교',
    imageUrl: '',
  },
  {
    id: 2,
    name: 'SOPT2',
    overview: '예술 동아리',
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
  const [selectedChip, setSelectedChip] = useState<string>('전체');

  return (
    <div css={containerStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '2.4rem', width: '100%' }}>
        <Heading tag="H4" css={{ fontWeight: 600 }}>
          우리 학교 동아리
        </Heading>
        <div css={{ width: '104.6rem' }}>
          <BannerSlider />
        </div>
      </Flex>
      <Flex styles={{ gap: '0.8rem' }}>
        {CATEGORY.map((category) => {
          const handleChipClick = () => {
            setSelectedChip(category);
          };

          return (
            <CategoryChip onClick={handleChipClick} isSelected={selectedChip === category}>
              {category}
            </CategoryChip>
          );
        })}
      </Flex>
      <section css={clubProfileStyle}>
        {CLUBDATA.map((club) => {
          if ((club.teamtype === '건국대학교' && club.category === selectedChip) || selectedChip === '전체') {
            return <ClubProfileCard title={club.name} detail={club.overview} imageUrl={club.imageUrl} />;
          }
        })}
      </section>
    </div>
  );
};

export default ShowcasePage;
