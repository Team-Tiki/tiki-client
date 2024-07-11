import { textStyle } from '@/page/archiving/component/Modal/Block/Date/BlockDate.style';
import useDateRange from '@/page/archiving/hook/useDateRange';
import { css } from '@emotion/react';

import { useEffect } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';

interface BlockDateProps {
  startDate: string;
  endDate: string;
  setStartDate: (date: string | ((prev: string) => string)) => void;
  setEndDate: (date: string | ((prev: string) => string)) => void;
  setIsDateRangeValid: (isValid: boolean) => void;
}

const BlockDate = ({ startDate, endDate, setStartDate, setEndDate, setIsDateRangeValid }: BlockDateProps) => {
  const {
    handleChange,
    dateValidation: { isStartDateValid, isEndDateValid, isStartDateError, isEndDateError, errorMessage },
  } = useDateRange(startDate, endDate);

  const inputStyle = (isValid: boolean, value: string, isError: boolean) => css`
    text-align: ${value.length === 10 ? 'center' : 'left'};
  `;

  useEffect(() => {
    setIsDateRangeValid(isStartDateValid && isEndDateValid && startDate.length === 10 && endDate.length === 10);
  }, [startDate, endDate, isStartDateValid, isEndDateValid, setIsDateRangeValid]);

  return (
    <>
      <Flex styles={{ direction: 'row', align: 'center', gap: '1.2rem' }}>
        <Input
          variant="default"
          size="large"
          placeholder="YYYY.MM.DD"
          css={[{ width: '9.7rem' }, inputStyle(isStartDateValid, startDate, isStartDateError)]}
          value={startDate}
          onChange={(e) => handleChange(e.target.value.replace(/\D/g, ''), setStartDate, true)}
          maxLength={10}
          isError={isStartDateError}
        />
        <p css={textStyle}>~</p>
        <Input
          variant="default"
          size="large"
          placeholder="YYYY.MM.DD"
          css={[{ width: '9.7rem' }, inputStyle(isEndDateValid, endDate, isEndDateError)]}
          value={endDate}
          onChange={(e) => handleChange(e.target.value.replace(/\D/g, ''), setEndDate, false)}
          maxLength={10}
          isError={isEndDateError}
        />
      </Flex>
      <div css={{ height: '1.5rem' }}>
        {(isStartDateError || isEndDateError) && (
          <Text tag="body7" css={{ color: 'red', marginTop: '0.5rem' }}>
            {errorMessage}
          </Text>
        )}
      </div>
    </>
  );
};

export default BlockDate;
