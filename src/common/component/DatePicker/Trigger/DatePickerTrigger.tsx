import { format } from 'date-fns';

import Input from '@/common/component/Input/Input';

interface DatePickerTriggerProps {
  selectedDate: Date | null;
  onClick: () => void;
  width?: string;
}

const DatePickerTrigger = ({ selectedDate, onClick, width = '10.3rem' }: DatePickerTriggerProps) => {
  return (
    <Input
      variant="default"
      size="large"
      value={selectedDate ? format(selectedDate, 'yyyy.MM.dd') : ''}
      placeholder="YYYY.MM.DD"
      readOnly
      onClick={onClick}
      css={{ cursor: 'pointer', width }}
    />
  );
};

export default DatePickerTrigger;
