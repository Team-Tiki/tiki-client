import DatePickerCalendar from '@/common/component/DatePicker/Calender/index/DatePickerCalendar';
import DatePickerContainer from '@/common/component/DatePicker/DatePickerContainer/DatePickerContainer';
import DatePickerTrigger from '@/common/component/DatePicker/Trigger/DatePickerTrigger';

export const DatePicker = Object.assign(DatePickerContainer, {
  Trigger: DatePickerTrigger,
  Calender: DatePickerCalendar,
});

export default DatePicker;
