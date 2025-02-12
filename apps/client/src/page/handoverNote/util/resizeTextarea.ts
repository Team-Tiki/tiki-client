import { RefObject } from 'react';

export const resizeTextarea = (ref: RefObject<HTMLTextAreaElement>) => {
  if (!ref.current) return;

  const textarea = ref.current;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
  textarea.parentElement!.style.height = `${textarea.scrollHeight + 25}px`;
};
