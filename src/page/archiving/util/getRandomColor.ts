import { COLORS } from '@/page/archiving/constant/color';

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);

  return COLORS[randomIndex];
};
