import { Block } from '@/page/archiving/index/type/blockType';
import { MonthType } from '@/page/archiving/index/type/monthType';

interface Floors {
  [key: string]: number;
}

const parseLocalDate = (localDateString: string): Date => {
  const [year, month, day] = localDateString.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day));
};

const getDays = (startDate: Date, endDate: Date): number[] => {
  const days: number[] = [];
  const date = new Date(startDate);
  while (date <= endDate) {
    days.push(date.getUTCDate());
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return days;
};
export const alignBlocks = (data: Block[], endDay: Date, selectedMonth: MonthType, currentYear: number): Floors => {
  const timeTable: boolean[][] = Array.from({ length: endDay.getDate() + 1 }, () => Array(data.length).fill(false));
  const floors: Floors = {};
  const clickedMonth = parseInt(selectedMonth.split('월')[0]);

  data.forEach((block) => {
    const blockStartDate = parseLocalDate(block.startDate.toString());
    const blockEndDate = parseLocalDate(block.endDate.toString());
    const blockMonth = blockStartDate.getUTCMonth() + 1;

    if (blockMonth === clickedMonth && blockStartDate.getUTCFullYear() === currentYear) {
      const days = getDays(blockStartDate, blockEndDate);
      let floor = 0;

      for (let depth = 1; depth <= data.length; depth++) {
        if (days.every((day) => !timeTable[day][depth])) {
          floor = depth;
          break;
        }
      }
      if (floor !== 0) {
        days.forEach((day) => {
          timeTable[day][floor] = true;
        });
        floors[block.timeBlockId] = floor;
      }
    }
  });

  return floors;
};
