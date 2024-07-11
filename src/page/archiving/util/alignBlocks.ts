import { TIME_BLOCK } from '@/page/archiving/constant/timeBlock';
import { MonthType } from '@/page/archiving/type/monthType';

const getDays = (startDate: Date, endDate: Date): number[] => {
  const days = [];
  const date = new Date(startDate);
  while (date <= endDate) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const alignBlocks = (endDay: Date, selectedMonth: MonthType, currentYear: number) => {
  const timeTable: boolean[][] = Array.from({ length: endDay.getDate() + 1 }, () =>
    Array(TIME_BLOCK.length).fill(false)
  );
  const floors: { [key: string]: number } = {};
  const clickedMonth = parseInt(selectedMonth.split('월')[0]);

  TIME_BLOCK.forEach((block) => {
    const blockMonth = block.startDate.getMonth() + 1;

    if (blockMonth === clickedMonth && block.startDate.getFullYear() === currentYear) {
      const days = getDays(block.startDate, block.endDate);
      let floor = 0;

      for (let depth = 1; depth <= TIME_BLOCK.length; depth++) {
        // 해당 층에 블록을 배치할 수 있는지 확인
        if (days.every((day) => !timeTable[day][depth])) {
          floor = depth;
          break;
        }
      }
      if (floor !== 0) {
        // 블록의 floor이 정해진 다음 블록 배치
        days.forEach((day) => {
          timeTable[day][floor] = true;
        });
        floors[block.id] = floor;
      }
    }
  });

  return floors;
};
