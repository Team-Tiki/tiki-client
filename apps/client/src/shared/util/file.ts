export const extractFileExtension = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf('.');

  return lastDotIndex !== -1 ? fileName.substring(lastDotIndex + 1) : '';
};

export const getFileVolume = (volume: number) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];

  let index = 0;

  if (volume <= 1024) {
    index = 0;
  }

  while (volume >= 1024) {
    volume /= 1024;
    index++;
  }

  return `${volume.toFixed(2)}${units[index]}`;
};

export const extractFileName = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf('.');

  return lastDotIndex !== -1 ? fileName.substring(0, lastDotIndex) : fileName;
};

export const getFileKey = (url: string): string => {
  const index = url.indexOf('file/');

  return url.substring(index);
};
