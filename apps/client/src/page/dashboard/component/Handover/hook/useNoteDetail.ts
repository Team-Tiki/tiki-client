import { useNoteDetailData } from '@/page/dashboard/component/Handover/hook/api/queries';
import { FreeNoteType, TemplateNoteType } from '@/page/dashboard/component/Handover/type';

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
