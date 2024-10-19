import { format } from 'date-fns';

import Input from '@/common/component/Input/Input';

interface DatePickerTriggerProps {
  selectedDate: Date | null;
  endDate?: Date | null;
  onClick: () => void;
  width?: string;
  variant: 'single' | 'range';
}

const DatePickerTrigger = ({ selectedDate, endDate, onClick, width = '10.3rem', variant }: DatePickerTriggerProps) => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Input
        variant="default"
        size="large"
        value={selectedDate ? format(selectedDate, 'yyyy. MM. dd') : ''}
        placeholder="YYYY.MM.DD"
        readOnly
        onClick={onClick}
        css={{ cursor: 'pointer', width }}
      />
      {variant === 'range' && (
        <Input
          variant="default"
          size="large"
          value={endDate ? format(endDate, 'yyyy. MM. dd') : ''}
          placeholder="YYYY.MM.DD"
          readOnly
          onClick={onClick}
          css={{ cursor: 'pointer', width }}
        />
      )}
    </div>
  );
};

export default DatePickerTrigger;
