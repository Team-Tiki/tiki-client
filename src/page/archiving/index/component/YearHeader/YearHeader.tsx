import PreviousYearArrow from '@/common/asset/svg/ic_arrow_left.svg?react';
import NextYearArrow from '@/common/asset/svg/ic_arrow_right.svg?react';
import Calendar from '@/common/asset/svg/ic_calendar.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { headerStyle } from '@/page/archiving/index/component/YearHeader/YearHeader.style';

interface YearHeaderProps {
  handlePrevYear: (year: number) => void;
  handleNextYear: (year: number) => void;
  currentYear: number;
}

const YearHeader = ({ handlePrevYear, handleNextYear, currentYear }: YearHeaderProps) => {
  return (
    <header css={headerStyle}>
      <Heading tag="H4" css={{ marginRight: '1.6rem', marginTop: '0.4rem', whiteSpace: 'nowrap' }}>
        타임라인
      </Heading>
      <Flex styles={{ align: 'center', justify: 'center', gap: '0.8rem' }}>
        <Calendar width={24} height={24} />
        <PreviousYearArrow
          role="button"
          width={16}
          height={16}
          onClick={() => handlePrevYear(currentYear)}
          css={{ cursor: 'pointer' }}
        />
        <Text tag="body1" css={{ marginTop: '0.4rem' }}>
          {currentYear}
        </Text>
        <NextYearArrow
          role="button"
          width={16}
          height={16}
          onClick={() => handleNextYear(currentYear)}
          css={{ cursor: 'pointer' }}
        />
      </Flex>
    </header>
  );
};

export default YearHeader;
