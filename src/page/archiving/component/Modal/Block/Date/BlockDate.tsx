import { supportStyle, textStyle } from '@/page/archiving/component/Modal/Block/Date/BlockDate.style';
import useDateRange from '@/page/archiving/hook/useDateRange';
import { css } from '@emotion/react';

import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import SupportingText from '@/common/component/SupportingText/SupportingText';

interface BlockDateProps {
  startDate: string;
  endDate: string;
  onSetStartDate: (date: string | ((prev: string) => string)) => void;
  onSetEndDate: (date: string | ((prev: string) => string)) => void;
  onSetIsDateRangeValid: (isValid: boolean) => void;
}

const BlockDate = ({ startDate, endDate, onSetStartDate, onSetEndDate, onSetIsDateRangeValid }: BlockDateProps) => {
  const { dates, validation, handleChange } = useDateRange(
    startDate,
    endDate,
    onSetStartDate,
    onSetEndDate,
    onSetIsDateRangeValid
  );

  const inputStyle = (value: string) => css`
    text-align: ${value.length === 10 ? 'center' : 'left'};
  `;

  return (
    <>
      <Flex styles={{ direction: 'row', align: 'center', gap: '1.2rem' }}>
        <Input
          variant="default"
          size="large"
          placeholder="YYYY.MM.DD"
          css={[{ width: '9.7rem' }, inputStyle(dates.startDate)]}
          value={dates.startDate}
          onChange={(e) => handleChange('startDate', e.target.value, validation.isEndDateValid, true)}
          maxLength={10}
          isError={validation.isStartDateError}
        />
        <p css={textStyle}>~</p>
        <Input
          variant="default"
          size="large"
          placeholder="YYYY.MM.DD"
          css={[{ width: '9.7rem' }, inputStyle(dates.endDate)]}
          value={dates.endDate}
          onChange={(e) => handleChange('endDate', e.target.value, validation.isStartDateValid, false)}
          maxLength={10}
          isError={validation.isEndDateError}
        />
      </Flex>

      <div css={{ height: '1.6rem' }}>
        {(validation.isStartDateError || validation.isEndDateError) && (
          <SupportingText isError css={supportStyle}>
            {validation.errorMessage}
          </SupportingText>
        )}
      </div>
    </>
  );
};

export default BlockDate;
