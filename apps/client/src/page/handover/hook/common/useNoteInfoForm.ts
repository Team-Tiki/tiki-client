import { useCallback, useRef, useState } from 'react';

import { NoteDetailProp, Status } from '@/page/handoverNote/type/note';
import { resizeTextarea } from '@/page/handoverNote/util/resizeTextarea';

export const useNoteInfoForm = ({ setInfo }: NoteDetailProp) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInfo((prev) => ({ ...prev, title: e.target.value }));

      resizeTextarea(textareaRef);
    },
    [setInfo]
  );

  const handleChangeStatus = useCallback(
    (value: Status) => {
      setInfo((prev) => ({ ...prev, complete: value === '완료' }));
    },
    [setInfo]
  );

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return { handleTitleChange, handleChangeStatus, handleDateChange, textareaRef, startDate, endDate };
};
