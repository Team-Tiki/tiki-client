import { clubProfileStyle } from '@/page/showcase/ShowcasePage.style';
import AdvBanner from '@/page/showcase/component/AdvBanner/AdvBanner';
import CategoryChip from '@/page/showcase/component/CategoryChip/CategoryChip';
import ClubProfileCard from '@/page/showcase/component/ClubProfileCard/ClubProfileCard';
import { CATEGORY } from '@/page/showcase/constant/category';
import { ADVBANNER, CLUBPROFILEDATA } from '@/page/showcase/constant/dummy';

import { useState } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Header from '@/common/component/Header/Header';
import Heading from '@/common/component/Heading/Heading';

const ShowcasePage = () => {
  const [selectedChip, setSelectedChip] = useState<string>('전체');

  return (
    <>
      <Header />
      <Flex styles={{ direction: 'column', padding: '0.8rem 16rem', gap: '3.6rem' }}>
        <Flex styles={{ direction: 'column', gap: '2.4rem' }}>
          <Heading tag="H4" css={{ fontWeight: 600 }}>
            우리 학교 동아리
          </Heading>
          <AdvBanner
            title={ADVBANNER[0].name}
            detail={ADVBANNER[0].overview}
            imageUrl={ADVBANNER[0].imageUrl}
            externUrl={''}
          />
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
          {CLUBPROFILEDATA.map((club) => {
            if (club.teamtype === '건국대학교') {
              return <ClubProfileCard title={club.name} detail={club.overview} imageUrl={club.imageUrl} />;
            }
          })}
        </section>
      </Flex>
    </>
  );
};

export default ShowcasePage;
