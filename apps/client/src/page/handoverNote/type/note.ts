import { components } from '@/shared/__generated__/schema';

export type NoteInfoType = Pick<
  components['schemas']['NoteTemplateDetailGetServiceResponse'],
  'title' | 'complete' | 'startDate' | 'endDate' | 'complete' | 'timeBlockList'
>;

export type TemplateNote = Pick<
  components['schemas']['NoteTemplateDetailGetServiceResponse'],
  'answerHowToFix' | 'answerHowToPrepare' | 'answerWhatActivity' | 'answerWhatIsDisappointedThing' | 'documentList'
>;

export type CustomNote = Pick<components['schemas']['NoteFreeDetailGetServiceResponse'], 'contents' | 'documentList'>;
