import { TIME_BLOCK } from '@/page/archiving/constant/timeBlock';
import { MonthType } from '@/page/archiving/type/monthType';

export const alignBlocks = (endDay: Date, selectedMonth: MonthType, currentYear: number) => {
  const timeTable: boolean[][] = Array.from({ length: endDay.getDate() + 1 }, () =>
    Array(TIME_BLOCK.length).fill(false)
  );
  const floors: { [key: string]: number } = {};

  TIME_BLOCK.forEach((block) => {
    const blockMonth = block.startDate.getMonth() + 1;
    const clickedMonth = parseInt(selectedMonth.split('월')[0]);

    if (blockMonth === clickedMonth && block.startDate.getFullYear() === currentYear) {
      let floor = 0;
      const date = new Date(block.startDate);
      for (let depth = 1; depth <= TIME_BLOCK.length; depth++) {
        let placeable = true;
        for (date; date <= block.endDate; date.setDate(date.getDate() + 1)) {
          const day = date.getDate();
          if (timeTable[day][depth]) {
            // 만약 day일 j층에 블록이 배치되어있다면 다음 층 탐색
            placeable = false;
            break;
          }
        }
        if (placeable) {
          floor = depth;
          break;
        }
      }
      if (floor !== 0) {
        for (let date = new Date(block.startDate); date <= block.endDate; date.setDate(date.getDate() + 1)) {
          const day = date.getDate();
          timeTable[day][floor] = true;
        }
        floors[block.id] = floor;
      }
    }
  });
  return floors;
};
