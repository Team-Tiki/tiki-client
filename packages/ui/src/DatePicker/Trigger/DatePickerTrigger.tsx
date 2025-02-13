import { format } from "date-fns";

import { triggerStyle } from "@/DatePicker/index.style";
import { textStyle } from "@/DatePicker/Trigger/DatePickerTrigger.style";
import Flex from "@/Flex/Flex";
import Input from "@/Input/Input";
import Text from "@/Text/Text";
import { MouseEvent } from "react";

interface DatePickerTriggerProps {
  selectedDate: Date | null;
  endDate?: Date | null;
  onClick: (e: MouseEvent<HTMLInputElement>) => void;
  variant: "single" | "range";
}

const DatePickerTrigger = ({ selectedDate, endDate, onClick, variant }: DatePickerTriggerProps) => {
  return (
    <Flex styles={{ direction: "row", align: "center", gap: "0.4rem" }}>
      <Input
        value={selectedDate ? format(selectedDate, "yyyy.MM.dd") : ""}
        name={variant === "single" ? "date" : "startDate"}
        placeholder="YYYY.MM.DD"
        readOnly
        onClick={onClick}
        css={triggerStyle}
      />
      {variant === "range" && (
        <>
          <Text tag="body8" css={textStyle}>
            ~
          </Text>
          <Input
            value={endDate ? format(endDate, "yyyy.MM.dd") : ""}
            placeholder="YYYY.MM.DD"
            name="endDate"
            readOnly
            onClick={onClick}
            css={triggerStyle}
          />
        </>
      )}
    </Flex>
  );
};

export default DatePickerTrigger;
