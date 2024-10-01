import { useMemo } from 'react';

import { useGetTimeBlockQuery } from '@/page/archiving/index/hook/api/useGetTimeBlockQuery';
import { Block } from '@/page/archiving/index/type/blockType';
import { MonthType } from '@/page/archiving/index/type/monthType';
import { alignBlocks } from '@/page/archiving/index/util/block';

interface BlockProps {
  teamId: number;
  currentYear: number;
  selectedMonth: number;
  endDay: Date;
  selectedMonthString: MonthType;
}

export const useFetchBlock = ({ teamId, currentYear, selectedMonth, endDay, selectedMonthString }: BlockProps) => {
  const { data } = useGetTimeBlockQuery(teamId, 'executive', currentYear, selectedMonth);

  const timeBlocks: Block[] = data?.timeBlocks || [];

  const blockFloors = useMemo(
    () => alignBlocks(timeBlocks, endDay, selectedMonthString, currentYear),
    [timeBlocks, endDay, selectedMonthString, currentYear]
  );

  return {
    timeBlocks,
    blockFloors,
  };
};
