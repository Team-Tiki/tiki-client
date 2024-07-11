import { textStyle } from '@/page/archiving/component/Modal/Block/Date/BlockDate.style';
import useDateRange from '@/page/archiving/hook/useDateRange';
import { css } from '@emotion/react';

import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';

interface BlockDateProps {
  startDate: string;
  endDate: string;
  onSetStartDate: (date: string | ((prev: string) => string)) => void;
  onSetEndDate: (date: string | ((prev: string) => string)) => void;
  onSetIsDateRangeValid: (isValid: boolean) => void;
}

const BlockDate = ({ startDate, endDate, onSetStartDate, onSetEndDate, onSetIsDateRangeValid }: BlockDateProps) => {
  const { dates, validation, isDateRangeValid, handleChange } = useDateRange(
    startDate,
    endDate,
    onSetStartDate,
    onSetEndDate,
    onSetIsDateRangeValid
  );

  const inputStyle = (isValid: boolean, value: string, isError: boolean) => css`
    text-align: ${value.length === 10 ? 'center' : 'left'};
  `;

  return (
    <>
      <Flex styles={{ direction: 'row', align: 'center', gap: '1.2rem' }}>
        <Input
          variant="default"
          size="large"
          placeholder="YYYY.MM.DD"
          css={[
            { width: '9.7rem' },
            inputStyle(validation.isStartDateValid, dates.startDate, validation.isStartDateError),
          ]}
          value={dates.startDate}
          onChange={(e) => handleChange('startDate', e.target.value, dates.endDate, validation.isEndDateValid, true)}
          maxLength={10}
          isError={validation.isStartDateError}
        />
        <p css={textStyle}>~</p>
        <Input
          variant="default"
          size="large"
          placeholder="YYYY.MM.DD"
          css={[{ width: '9.7rem' }, inputStyle(validation.isEndDateValid, dates.endDate, validation.isEndDateError)]}
          value={dates.endDate}
          onChange={(e) => handleChange('endDate', e.target.value, dates.startDate, validation.isStartDateValid, false)}
          maxLength={10}
          isError={validation.isEndDateError}
        />
      </Flex>
      <div css={{ height: '1.5rem' }}>
        {(validation.isStartDateError || validation.isEndDateError) && (
          <Text tag="body7" css={{ color: 'red', marginTop: '0.5rem' }}>
            {validation.errorMessage}
          </Text>
        )}
      </div>
    </>
  );
};

export default BlockDate;
