import { useCallback } from 'react';

import { NoteDetailProp } from '@/page/handoverNote/type/note';

export const useNoteInfoForm = ({ setInfo }: Omit<NoteDetailProp, 'info'>) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInfo((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleChangeStatus = useCallback(
    (value: string) => {
      setInfo((prev) => ({
        ...prev,
        complete: value === '완료',
      }));
    },
    [setInfo]
  );

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setInfo((prev) => ({
      ...prev,
      startDate: startDate ? startDate.toISOString() : '',
      endDate: endDate ? endDate.toISOString() : '',
    }));
  };

  return { handleTitleChange, handleChangeStatus, handleDateChange };
};
