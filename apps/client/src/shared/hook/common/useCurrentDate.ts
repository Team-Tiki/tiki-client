import { useRef } from 'react';

export const useCurrentDate = () => {
  return useRef<string>(new Date(new Date().getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, -1)).current;
};
