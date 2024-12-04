import { format } from "date-fns";

import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import { IcArrowLeft, IcArrowRight } from "@tiki/icon";

interface CalendarHeaderProps {
  currentMonth: Date;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const CalendarHeader = ({ currentMonth, onClickPrev, onClickNext }: CalendarHeaderProps) => (
  <Flex styles={{ justify: "space-between", align: "center", gap: "1rem" }}>
    <IcArrowLeft onClick={onClickPrev} width={24} height={24} css={{ cursor: "pointer" }} />
    <Text tag="body6" css={{ textAlign: "center", fontWeight: 500 }}>
      {format(currentMonth, "yyyy.MM")}
    </Text>
    <IcArrowRight onClick={onClickNext} width={24} height={24} css={{ cursor: "pointer" }} />
  </Flex>
);

export default CalendarHeader;
