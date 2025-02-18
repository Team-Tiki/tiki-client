import { format } from 'date-fns';

import {
  dateInputStyle,
  textStyle,
} from '@/DatePicker/Trigger/DatePickerTrigger.style';
import Flex from '@/Flex/Flex';
import Input from '@/Input/Input';
import Text from '@/Text/Text';
import { theme } from '@/theme';

interface DatePickerTriggerProps {
  selectedDate: Date | null;
  endDate?: Date | null;
  onClick: () => void;
  variant: 'single' | 'range';
}

const DatePickerTrigger = ({
  selectedDate,
  endDate,
  onClick,
  variant,
}: DatePickerTriggerProps) => {
  return (
    <Flex styles={{ direction: 'row', align: 'center', gap: '0.4rem' }}>
      <Input
        value={selectedDate ? format(selectedDate, 'yyyy.MM.dd') : ''}
        placeholder="YYYY.MM.DD"
        readOnly
        onClick={onClick}
        css={dateInputStyle}
      />
      {variant === 'range' && (
        <>
          <Text tag="body8" css={textStyle}>
            ~
          </Text>
          <Input
            value={endDate ? format(endDate, 'yyyy.MM.dd') : ''}
            placeholder="YYYY.MM.DD"
            readOnly
            onClick={onClick}
            css={dateInputStyle}
          />
        </>
      )}
    </Flex>
  );
};

export default DatePickerTrigger;
