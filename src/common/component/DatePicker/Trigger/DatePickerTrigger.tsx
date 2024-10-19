import { format } from 'date-fns';

import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';

import { textStyle } from './DatePickerTrigger.style';

interface DatePickerTriggerProps {
  selectedDate: Date | null;
  endDate?: Date | null;
  onClick: () => void;
  width?: string;
  variant: 'single' | 'range';
}

const DatePickerTrigger = ({ selectedDate, endDate, onClick, width, variant }: DatePickerTriggerProps) => {
  return (
    <Flex styles={{ direction: 'row', align: 'center', gap: '0.4rem' }}>
      <Input
        variant="default"
        size="large"
        value={selectedDate ? format(selectedDate, 'yyyy.MM.dd') : ''}
        placeholder="YYYY.MM.DD"
        readOnly
        onClick={onClick}
        css={{ cursor: 'pointer', width }}
      />
      {variant === 'range' && (
        <>
          <Text tag="body6" css={textStyle}>
            ~
          </Text>
          <Input
            variant="default"
            size="large"
            value={endDate ? format(endDate, 'yyyy.MM.dd') : ''}
            placeholder="YYYY.MM.DD"
            readOnly
            onClick={onClick}
            css={{ cursor: 'pointer', width }}
          />
        </>
      )}
    </Flex>
  );
};

export default DatePickerTrigger;
