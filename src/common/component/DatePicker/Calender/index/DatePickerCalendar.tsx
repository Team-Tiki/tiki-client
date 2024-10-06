import Calender from './Calender';

interface DatePickerCalendarProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
  isOpen: boolean;
}

const DatePickerCalendar = ({ selectedDate, setSelectedDate, isOpen }: DatePickerCalendarProps) => {
  return isOpen ? (
    <div style={{ position: 'absolute', top: 'calc(100% + 0.8rem)', left: 0 }}>
      <Calender selectedDate={selectedDate || new Date()} setSelectedDate={setSelectedDate} />
    </div>
  ) : null;
};

export default DatePickerCalendar;
