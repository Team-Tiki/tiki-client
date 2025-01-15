import { COLORS } from '@/shared/component/TimeBlockModal/constant/color';

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);

  return COLORS[randomIndex];
};

export const colorToHex = (color: string) => {
  const colorMap: Record<string, string> = {
    red: '#FFE6E8',
    yellow: '#F8E2CB',
    green: '#C4F2E5',
    purple: '#DCD8FA',
    pink: '#F8E1F5',
    sky: '#D3EFFA',
  };

  return colorMap[color];
};
