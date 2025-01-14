import { components } from '@/shared/__generated__/schema';

export type NoteDetailType = Pick<
  components['schemas']['NoteTemplateDetailGetServiceResponse'],
  'title' | 'author' | 'complete' | 'startDate' | 'endDate' | 'complete' | 'timeBlockList'
>;

export type TemplateNote = Pick<
  components['schemas']['NoteTemplateDetailGetServiceResponse'],
  'answerHowToFix' | 'answerHowToPrepare' | 'answerWhatActivity' | 'answerWhatIsDisappointedThing' | 'documentList'
>;

export type CustomNote = Pick<components['schemas']['NoteFreeDetailGetServiceResponse'], 'contents' | 'documentList'>;
