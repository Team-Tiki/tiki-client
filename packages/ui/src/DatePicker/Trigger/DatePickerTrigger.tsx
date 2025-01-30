import { format } from 'date-fns';

import { textStyle } from '@/DatePicker/Trigger/DatePickerTrigger.style';
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
        css={{
          textAlign: 'center',
          cursor: 'pointer',
          width: '100%',
          ...theme.text.body06,
          '::placeholder': { ...theme.text.body06 },
        }}
      />
      {variant === 'range' && (
        <>
          <Text tag="body6" css={textStyle}>
            ~
          </Text>
          <Input
            value={endDate ? format(endDate, 'yyyy.MM.dd') : ''}
            placeholder="YYYY.MM.DD"
            readOnly
            onClick={onClick}
            css={{
              cursor: 'pointer',
              width: '100%',
              ...theme.text.body06,
              textAlign: 'center',
              '::placeholder': { ...theme.text.body06 },
            }}
          />
        </>
      )}
    </Flex>
  );
};

export default DatePickerTrigger;
