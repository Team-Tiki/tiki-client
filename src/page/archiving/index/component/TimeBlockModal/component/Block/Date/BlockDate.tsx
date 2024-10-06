import { css } from '@emotion/react';

import { useEffect, useState } from 'react';

import DatePicker from '@/common/component/DatePicker';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import SupportingText from '@/common/component/SupportingText/SupportingText';
import { useOutsideClick } from '@/common/hook/useOutsideClick';
import { useOverlay } from '@/common/hook/useOverlay';

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

  const inputStyle = (value: string) => css`
    text-align: ${value.length === 10 ? 'center' : 'left'};
  `;

  const { isOpen, close, toggle } = useOverlay();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const ref = useOutsideClick<HTMLDivElement>(close);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (!ref.current || !(event.target instanceof HTMLElement)) return;
      const isOutside = !ref.current.contains(event.target as Node);

      if (isOutside) {
        close?.();
      }
    };

    if (isOpen) {
      window.addEventListener('mousedown', handleMouseDown);
    } else {
      window.removeEventListener('mousedown', handleMouseDown);
    }

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen, close, ref]);

  return (
    <>
      <Flex styles={{ direction: 'row', align: 'center', gap: '1.2rem' }}>
        <DatePicker ref={ref}>
          <DatePicker.Trigger selectedDate={selectedDate} onClick={toggle} />
          <DatePicker.Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate} isOpen={isOpen} />
        </DatePicker>
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
