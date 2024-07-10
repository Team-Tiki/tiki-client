import { clubProfileStyle } from '@/page/showcase/ShowcasePage.style';
import CategoryChip from '@/page/showcase/component/CategoryChip/CategoryChip';
import ClubProfileCard from '@/page/showcase/component/ClubProfileCard/ClubProfileCard';
import { CATEGORY } from '@/page/showcase/constant/category';

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
          <div>홍보배너</div>
        </Flex>
        <Flex styles={{ gap: '0.8rem' }}>
          {CATEGORY.map((category) => {
            return <CategoryChip isSelected={selectedChip === category}>{category}</CategoryChip>;
          })}
        </Flex>
        <section css={clubProfileStyle}>
          <ClubProfileCard
            title={'TIKI'}
            detail={'안녕하세요 티키입니다. 저희는 멋진 웹사이트르 제작합니다.'}
            imageUrl=""
          />
          <ClubProfileCard
            title={'TIKI'}
            detail={'안녕하세요 티키입니다. 저희는 멋진 웹사이트르 제작합니다.'}
            imageUrl=""
          />
          <ClubProfileCard
            title={'TIKI'}
            detail={'안녕하세요 티키입니다. 저희는 멋진 웹사이트르 제작합니다.'}
            imageUrl=""
          />
          <ClubProfileCard
            title={'TIKI'}
            detail={'안녕하세요 티키입니다. 저희는 멋진 웹사이트르 제작합니다.'}
            imageUrl=""
          />
          <ClubProfileCard
            title={'TIKI'}
            detail={'안녕하세요 티키입니다. 저희는 멋진 웹사이트르 제작합니다.'}
            imageUrl=""
          />
          <ClubProfileCard
            title={'TIKI'}
            detail={'안녕하세요 티키입니다. 저희는 멋진 웹사이트르 제작합니다.'}
            imageUrl=""
          />
          <ClubProfileCard
            title={'TIKI'}
            detail={'안녕하세요 티키입니다. 저희는 멋진 웹사이트르 제작합니다.'}
            imageUrl=""
          />
        </section>
      </Flex>
    </>
  );
};

export default ShowcasePage;
