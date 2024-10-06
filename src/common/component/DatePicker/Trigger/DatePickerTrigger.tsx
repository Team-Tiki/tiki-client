import { format } from 'date-fns';

import Input from '@/common/component/Input/Input';

interface DatePickerTriggerProps {
  selectedDate: Date | null;
  onClick: () => void;
}

const DatePickerTrigger = ({ selectedDate, onClick }: DatePickerTriggerProps) => {
  return (
    <Input
      variant="default"
      size="large"
      value={selectedDate ? format(selectedDate, 'yyyy.MM.dd') : ''}
      placeholder="YYYY.MM.DD"
      readOnly
      onClick={onClick}
      css={{ cursor: 'pointer', width: '10.3rem' }}
    />
  );
};

export default DatePickerTrigger;
