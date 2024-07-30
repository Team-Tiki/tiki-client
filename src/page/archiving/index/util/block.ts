import { Block } from '@/page/archiving/index/type/blockType';
import { MonthType } from '@/page/archiving/index/type/monthType';

interface Floors {
  [key: string]: number;
}

export const getLastDay = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

const parseLocalDate = (localDateString: string): Date => {
  const [year, month, day] = localDateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const getDays = (startDate: Date, endDate: Date): number[] => {
  const days: number[] = [];
  const date = new Date(startDate);
  while (date <= endDate) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const alignBlocks = (data: Block[], endDay: Date, selectedMonth: MonthType, currentYear: number): Floors => {
  const timeTable: boolean[][] = Array.from({ length: endDay.getDate() + 1 }, () => Array(100).fill(false));
  const floors: Floors = {};
  const clickedMonth = parseInt(selectedMonth.split('월')[0]); // 클릭한 달

  data.forEach((block) => {
    const blockStartDate = parseLocalDate(block.startDate.toString()); // 블럭의 시작 날짜
    let blockEndDate = parseLocalDate(block.endDate.toString()); // 블럭의 끝 날짜

    const setTimeBlocks = (blockStartDate: Date, blockEndDate: Date) => {
      const days = getDays(blockStartDate, blockEndDate);

      for (let depth = 1; depth <= 100; depth++) {
        let isAvailable = true;
        for (const day of days) {
          if (timeTable[day][depth]) {
            isAvailable = false;
            break;
          }
        }
        if (isAvailable) {
          days.forEach((day) => (timeTable[day][depth] = true));
          floors[block.timeBlockId] = depth;
          break;
        }
      }
    };

    if (blockStartDate.getFullYear() === currentYear) {
      if (blockStartDate.getMonth() + 1 < clickedMonth && blockEndDate.getMonth() + 1 > clickedMonth) {
        // 중간 달인 경우
        blockStartDate.setFullYear(currentYear, clickedMonth - 1, 1); // 블록의 시작 날짜 - 해당 월의 첫째 날
        blockEndDate = getLastDay(new Date(currentYear, clickedMonth - 1)); // 블록의 끝 날짜 - 해당 월의 마지막 날
      } else {
        if (blockStartDate.getMonth() + 1 < clickedMonth) {
          blockStartDate.setFullYear(currentYear, clickedMonth - 1, 1); // 해당 월의 첫째 날
        }
        if (blockEndDate.getMonth() + 1 > clickedMonth) {
          blockEndDate = getLastDay(new Date(currentYear, clickedMonth - 1)); // 해당 월의 마지막 날
        }
      }
      setTimeBlocks(blockStartDate, blockEndDate);
    }
  });

  return floors;
};
