import DatePickerCalendar from '@/common/component/DatePicker/Calendar/DatePickerCalendar';
import DatePickerContainer from '@/common/component/DatePicker/DatePickerContainer/DatePickerContainer';
import DatePickerTrigger from '@/common/component/DatePicker/Trigger/DatePickerTrigger';

const DatePicker = Object.assign(DatePickerContainer, {
  Trigger: DatePickerTrigger,
  Calendar: DatePickerCalendar,
});

export default DatePicker;
