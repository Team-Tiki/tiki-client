import { EMPTY_NOTE_TITLE } from '@/page/handover/constant';

export const templateConfig = {
  noteType: 'TEMPLATE',
  answerWhatActivity: '',
  answerHowToPrepare: '',
  answerWhatIsDisappointedThing: '',
  answerHowToFix: '',
  documentList: [],
};

export const customConfig = {
  noteType: 'FREE',
  contents: '',
  documentList: [],
};

export const infoConfig = {
  title: EMPTY_NOTE_TITLE,
  author: '',
  complete: false,
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  timeBlockList: [],
};
