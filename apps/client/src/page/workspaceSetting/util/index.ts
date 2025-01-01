// 팀 이름 변경 후 30일 지났는지 알려주는 함수
export const hasRecentUpdates = (updateDate: string) => {
  const date = new Date(updateDate);
  const now = new Date();
  date.setDate(date.getDate() + 30);
  return now > date;
};
