export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? '오후' : '오전';
  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${ampm} ${hours}시 ${formattedMinutes}분`;
};

export const formatDateToDots = (date: string) => {
  return date.replace(/-/g, '.');
};
