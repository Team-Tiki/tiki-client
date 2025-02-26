import DatePickerCalendar from "@/DatePicker/Calendar/DatePickerCalendar";
import { containerStyle } from "@/DatePicker/index.style";
import DatePickerTrigger from "@/DatePicker/Trigger/DatePickerTrigger";
import { useDatePicker, useOutsideClick } from "@tiki/utils";
import { MouseEvent, useState } from "react";

interface DatePickerProps {
  variant: "single" | "range";
  triggerWidth?: string;
  onChange: (selectedDate: Date | null, endDate: Date | null) => void;
  defaultSelectedDate?: Date;
  defaultEndDate?: Date;
}

const DatePicker = ({
  variant,
  triggerWidth = "10.3rem",
  onChange,
  defaultSelectedDate,
  defaultEndDate,
}: DatePickerProps) => {
  const [openStatus, setOpenStatus] = useState<"start" | "end" | null>(null);

  const ref = useOutsideClick<HTMLDivElement>(() => setOpenStatus(null));

  const initialSelectedDate = defaultSelectedDate ? new Date(defaultSelectedDate) : null;
  const initialEndDate = defaultEndDate ? new Date(defaultEndDate) : null;

  const { selectedDate, endDate, handleSelectDate, clearDates } = useDatePicker(
    variant,
    onChange,
    initialSelectedDate,
    initialEndDate,
  );

  const handleSingleRange = (e: MouseEvent<HTMLInputElement>) => {
    if (!openStatus) {
      setOpenStatus("start");
    } else {
      setOpenStatus(null);
    }
  };

  const handleMultiRange = (e: MouseEvent<HTMLInputElement>) => {
    const target = e.currentTarget.name;

    switch (target) {
      case "startDate": {
        if (!openStatus || openStatus === "end") {
          setOpenStatus("start");
        } else if (openStatus === "start") {
          setOpenStatus(null);
        }
        break;
      }
      case "endDate": {
        if (!openStatus || openStatus === "start") {
          setOpenStatus("end");
        } else if (openStatus === "end") {
          setOpenStatus(null);
        }
        break;
      }
      default: {
        throw new Error("multirange datepicker only has start, endDate name field");
      }
    }

    if (selectedDate && endDate) clearDates();
  };

  const onClick = variant === "single" ? handleSingleRange : handleMultiRange;

  return (
    <div ref={ref} css={containerStyle(triggerWidth)}>
      <DatePickerTrigger
        selectedDate={selectedDate || initialSelectedDate}
        endDate={endDate || initialEndDate}
        onClick={onClick}
        variant={variant}
      />
      {openStatus !== null && (
        <DatePickerCalendar
          selectedDate={selectedDate || initialSelectedDate || new Date()}
          endDate={endDate || initialEndDate}
          setSelectedDate={(date) => {
            handleSelectDate(date);
            if (variant === "single") {
              setOpenStatus(null);
            } else if (variant === "range") {
              if (selectedDate) setOpenStatus(null);
            }
          }}
          variant={variant}
        />
      )}
    </div>
  );
};
export default DatePicker;
