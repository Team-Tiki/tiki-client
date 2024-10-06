import { css } from '@emotion/react';

import { useState } from 'react';

import DatePicker from '@/common/component/DatePicker/DatePicker';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import SupportingText from '@/common/component/SupportingText/SupportingText';

import {
  supportStyle,
  textStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/Block/Date/BlockDate.style';
import useDateRange from '@/page/archiving/index/component/TimeBlockModal/hook/common/useDateRange';

interface BlockDateProps {
  startDate: string;
  endDate: string;
  onSetStartDate: (date: string) => void;
  onSetEndDate: (date: string) => void;
  onSetIsDateRangeValid: (isValid: boolean) => void;
}

const BlockDate = ({ startDate, endDate, onSetStartDate, onSetEndDate, onSetIsDateRangeValid }: BlockDateProps) => {
  const { dates, validation, handleChange } = useDateRange(
    startDate,
    endDate,
    (date: string) => onSetStartDate(date),
    (date: string) => onSetEndDate(date),
    onSetIsDateRangeValid
  );

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const inputStyle = (value: string) => css`
    text-align: ${value.length === 10 ? 'center' : 'left'};
  `;

  return (
    <>
      <Flex styles={{ direction: 'row', align: 'center', gap: '1.2rem' }}>
        <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <p css={textStyle}>~</p>
        <Input
          variant="default"
          size="large"
          placeholder="YYYY-MM-DD"
          css={[{ width: '10.3rem' }, inputStyle(dates.endDate)]}
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
