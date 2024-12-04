export const isValidDate = (dateString: string): boolean => {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!datePattern.test(dateString)) return false;

  const [year, month, day] = dateString.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
};

export const getFormatDateString = (dateString: string): string => {
  if (dateString.length !== 8) return dateString;

  return `${dateString.slice(0, 4)}-${dateString.slice(4, 6)}-${dateString.slice(6, 8)}`;
};

export const getFormatNumberString = (value: string, maxLength: number) => {
  const digits = value.replace(/\D/g, '');

  return digits.slice(0, maxLength);
};
