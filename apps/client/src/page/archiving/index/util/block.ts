import { Block } from '@/page/archiving/index/type/blockType';

interface Floors {
  [key: string]: number;
}

interface TimeBlockPeriod {
  startDate: Date;
  endDate: Date;
  currentYear: number;
  currentMonth: number;
}

const parseLocalDate = (localDate: string): Date => {
  const [year, month, day] = localDate.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// 일수 만큼의 배열을 리턴
const getDays = (startDate: Date, endDate: Date): number[] => {
  const days: number[] = [];
  const date = new Date(startDate);

  while (date <= endDate) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }

  return days;
};

export const getLastDay = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

// 입력된 기간에 따라 타임블록의 시작/끝 지정하는 함수
export const createTimeBlock = ({ startDate, endDate, currentYear, currentMonth }: TimeBlockPeriod) => {
  let blockStartDate = new Date(startDate);
  let blockEndDate = new Date(endDate);

  const startMonth = blockStartDate.getMonth() + 1;
  const endMonth = blockEndDate.getMonth() + 1;

  const firstDay = new Date(currentYear, currentMonth - 1, 1);
  const lastDay = getLastDay(firstDay);

  if (blockStartDate.getFullYear() === currentYear && blockEndDate.getFullYear() === currentYear) {
    if (startMonth < currentMonth && currentMonth < endMonth) {
      blockStartDate = firstDay;
      blockEndDate = lastDay;
    } else if (startMonth !== currentMonth && endMonth === currentMonth) {
      blockStartDate = firstDay;
    } else if (startMonth === currentMonth && endMonth !== currentMonth) {
      blockEndDate = lastDay;
    }
  } else {
    if (startMonth <= currentMonth || currentMonth <= endMonth) {
      blockStartDate =
        startMonth === currentMonth && blockStartDate.getFullYear() === currentYear ? blockStartDate : firstDay;
      blockEndDate = endMonth === currentMonth && blockEndDate.getFullYear() === currentYear ? blockEndDate : lastDay;
    }
  }

  return { startDate: blockStartDate, endDate: blockEndDate };
};

// 타임블록의 상하 배치 함수
export const alignBlocks = (data: Block[], endDay: Date, currentMonth: number, currentYear: number): Floors => {
  const timeTable: boolean[][] = Array.from({ length: endDay.getDate() + 1 }, () => Array(data.length).fill(false));
  const floors: Floors = {};

  data.forEach((block) => {
    const { startDate, endDate } = block;

    const { startDate: blockStartDate, endDate: blockEndDate } = createTimeBlock({
      startDate: parseLocalDate(startDate.toString()),
      endDate: parseLocalDate(endDate.toString()),
      currentYear,
      currentMonth,
    });

    const days = getDays(blockStartDate, blockEndDate);

    for (let depth = 1; depth <= 100; depth++) {
      let isAvailable = true;

      for (const day of days) {
        if (day < timeTable.length && timeTable[day][depth]) {
          isAvailable = false;
          break;
        }
      }

      if (isAvailable) {
        days.forEach((day) => {
          if (day < timeTable.length) {
            timeTable[day][depth] = true;
          }
        });
        floors[block.timeBlockId] = depth;
        break;
      }
    }
  });

  return floors;
};
