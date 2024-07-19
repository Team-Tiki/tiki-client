import { Block } from '@/page/archiving/index/type/blockType';
import { MonthType } from '@/page/archiving/index/type/monthType';

interface Floors {
  [key: string]: number;
}

export const getLastDayOfMonth = (date: Date): Date => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  return new Date(Date.UTC(year, month + 1, 0));
};

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
  const clickedMonth = parseInt(selectedMonth.split('월')[0]); // 클릭한 헤더의 달

  data.forEach((block) => {
    const blockStartDate = parseLocalDate(block.startDate.toString()); // 블럭의 시작 날짜
    const blockEndDate = parseLocalDate(block.endDate.toString()); // 블럭의 끝 날짜

    const stackBlocks = (blockStartDate: Date, blockEndDate: Date) => {
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
    };

    if (blockStartDate.getUTCFullYear() === currentYear) {
      if (blockStartDate.getUTCMonth() + 1 === clickedMonth) {
        stackBlocks(blockStartDate, blockEndDate);
      } else if (blockStartDate.getUTCMonth() + 1 !== clickedMonth) {
        blockStartDate.setDate(1);
        stackBlocks(blockStartDate, blockEndDate);
      } else if (blockEndDate.getUTCMonth() + 1 !== clickedMonth) {
        blockEndDate.setMonth(new Date(clickedMonth).getMonth() + 1);
        stackBlocks(blockStartDate, blockEndDate);
      }
    }
  });

  return floors;
};
