import { FreeNoteType, TemplateNoteType } from '@/page/dashboard/component/Handover/type';
import { useNoteDetailData } from '@/page/handover/note/hooks/api/queries';

export const useNoteDetail = (noteId: number) => {
  const { data } = useNoteDetailData(noteId);

  if (!data) return { content: '', timeBlockList: [] };

  if (data.data?.noteType === 'FREE') {
    const freeNote = data.data as FreeNoteType;

    return { content: freeNote.contents, timeBlockList: freeNote.timeBlockList };
  }

  if (data.data?.noteType === 'TEMPLATE') {
    const temNote = data.data as TemplateNoteType;

    return { content: temNote.answerWhatActivity, timeBlockList: temNote.timeBlockList };
  }

  return { content: '', timeBlockList: [] };
};
