import { components, paths } from '@/shared/__generated__/schema';

export type NoteInfoType = {
  data: Pick<
    components['schemas']['NoteTemplateDetailGetServiceResponse'],
    'title' | 'complete' | 'author' | 'startDate' | 'endDate' | 'timeBlockList'
  >;
};

export type NoteDetailResponse = {
  data: paths['/api/v1/notes/{teamId}/{noteId}']['get']['responses']['200']['content']['application/json'];
};

export type TemplateNote = Pick<
  components['schemas']['NoteTemplateDetailGetServiceResponse'],
  'answerHowToFix' | 'answerHowToPrepare' | 'answerWhatActivity' | 'answerWhatIsDisappointedThing' | 'documentList'
>;

export type CustomNote = Pick<components['schemas']['NoteFreeDetailGetServiceResponse'], 'contents' | 'documentList'>;

export type TemplateNoteData = { data: components['schemas']['NoteTemplateDetailGetServiceResponse'] };
export type CustomNoteData = { data: components['schemas']['NoteFreeDetailGetServiceResponse'] };

export type Documents = components['schemas']['NoteFreeDetailGetServiceResponse']['documentList'];

export type NoteResponse = {
 data: components['schemas']['NoteGetResponse'] ;
};
