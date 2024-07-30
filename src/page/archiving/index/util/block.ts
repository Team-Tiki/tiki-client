import { Block } from '@/page/archiving/index/type/blockType';
import { MonthType } from '@/page/archiving/index/type/monthType';

interface Floors {
  [key: string]: number;
}

interface TimeBlockPeriod {
  startDate: Date;
  endDate: Date;
  currentYear: number;
  selectedMonthNumber: number;
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

export const createTimeBlock = ({ startDate, endDate, currentYear, selectedMonthNumber }: TimeBlockPeriod) => {
  let blockStartDate = new Date(startDate);
  let blockEndDate = new Date(endDate);

  const startMonth = blockStartDate.getMonth() + 1;
  const endMonth = blockEndDate.getMonth() + 1;

  const firstDay = new Date(currentYear, selectedMonthNumber - 1, 1);
  const lastDate = getLastDay(firstDay);

  if (blockStartDate.getFullYear() === currentYear && blockEndDate.getFullYear() === currentYear) {
    if (startMonth < selectedMonthNumber && selectedMonthNumber < endMonth) {
      blockStartDate = firstDay;
      blockEndDate = lastDate;
    } else {
      if (startMonth !== selectedMonthNumber) {
        blockStartDate = firstDay;
      }
      if (endMonth !== selectedMonthNumber) {
        blockEndDate = lastDate;
      }
    }
  }
  return { startDate: blockStartDate, endDate: blockEndDate };
};

export const alignBlocks = (data: Block[], endDay: Date, selectedMonth: MonthType, currentYear: number): Floors => {
  const timeTable: boolean[][] = Array.from({ length: endDay.getDate() + 1 }, () => Array(100).fill(false));
  const floors: Floors = {};
  const clickedMonth = parseInt(selectedMonth.split('월')[0]); // 클릭한 달

  data.forEach((block) => {
    const { startDate, endDate } = block;

    const { startDate: blockStartDate, endDate: blockEndDate } = createTimeBlock({
      startDate: parseLocalDate(startDate.toString()),
      endDate: parseLocalDate(endDate.toString()),
      currentYear,
      selectedMonthNumber: clickedMonth,
    });

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
  });

  return floors;
};
