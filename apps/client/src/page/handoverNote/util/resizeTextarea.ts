import { RefObject } from 'react';

export const resizeTextarea = (ref: RefObject<HTMLTextAreaElement>) => {
  if (ref.current) {
    ref.current.style.height = 'auto';
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }
};
