export const getRandomColor = (colors: string[]): string => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
