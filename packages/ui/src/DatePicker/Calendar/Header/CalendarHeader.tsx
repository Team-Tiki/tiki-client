import { format } from "date-fns";

import Button from "@/Button/Button";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import { IcArrowBack, IcArrowForward } from "@tiki/icon";


interface CalendarHeaderProps {
  currentMonth: Date;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const CalendarHeader = ({ currentMonth, onClickPrev, onClickNext }: CalendarHeaderProps) => (
  <Flex styles={{ justify: "space-between", align: "center", gap: "1rem" }}>
    <Button variant="outline" onClick={onClickPrev} css={{padding: '0.45rem'}}>
      <IcArrowBack width={15} height={15} css={{ flexShrink: '1' }} />
    </Button>
    <Text tag="body6" css={{ textAlign: "center", fontWeight: 500 }}>
      {format(currentMonth, "yyyy.MM")}
    </Text>
    <Button variant="outline" onClick={onClickNext} css={{padding: '0.45rem'}}>
      <IcArrowForward width={15} height={15} css={{ flexShrink: '1' }} />
    </Button>

  </Flex>
);

export default CalendarHeader;
