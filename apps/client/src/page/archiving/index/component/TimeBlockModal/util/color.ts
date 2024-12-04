import { COLORS } from '@/page/archiving/index/component/TimeBlockModal/constant/color';

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);

  return COLORS[randomIndex];
};
