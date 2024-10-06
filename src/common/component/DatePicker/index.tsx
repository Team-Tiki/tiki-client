import DatePickerCalendar from './Calender/DatePickerCalendar';
import DatePickerContainer from './DatePickerContainer/DatePickerContainer';
import DatePickerTrigger from './Trigger/DatePickerTrigger';

export const DatePicker = Object.assign(DatePickerContainer, {
  Trigger: DatePickerTrigger,
  Calender: DatePickerCalendar,
});

export default DatePicker;
