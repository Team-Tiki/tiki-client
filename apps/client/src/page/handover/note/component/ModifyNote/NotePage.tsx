import { Button, CommandButton, Flex, TabButton, TabList, TabPanel, TabRoot } from '@tiki/ui';

import { Suspense, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Custom from '@/page/handover/note/component/ModifyNote/Custom/Custom';
import NoteInfo from '@/page/handover/note/component/ModifyNote/NoteInfo/NoteInfo';
import Template from '@/page/handover/note/component/ModifyNote/Template/Template';
import { NoteInfoType } from '@/page/handover/note/type/note';
import { formattingDateWithBar } from '@/page/handover/note/util/date';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

import { noteSectionStyle, tabButtonStyle } from './NotePage.style';

export type TemplateNoteData = components['schemas']['NoteTemplateDetailGetServiceResponse'];
export type CustomNoteData = components['schemas']['NoteFreeDetailGetServiceResponse'];

export type Documents = components['schemas']['NoteFreeDetailGetServiceResponse']['documentList'];

export type Document = {
  id: number;
  fileName: string;
  fileUrl: string;
  capacity: number;
};

const isTemplateNote = (note: TemplateNoteData | CustomNoteData): note is TemplateNoteData =>
  note.noteType === 'TEMPLATE';

const isCustomNote = (note: TemplateNoteData | CustomNoteData): note is CustomNoteData => note.noteType === 'FREE';

const NotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const teamId = useInitializeTeamId();
  const { noteId } = useParams();

  const { data: noteData } = $api.useSuspenseQuery('get', '/api/v1/notes/{teamId}/{noteId}', {
    params: {
      path: {
        teamId,
        noteId: parseInt(noteId!),
      },
    },
  });

  const noteDetail: NoteInfoType = useMemo(
    () => ({
      title: noteData?.title || '',
      complete: noteData?.complete || false,
      timeBlockList: noteData?.timeBlockList || [],
      startDate: noteData?.startDate || formattingDateWithBar(new Date()),
      endDate: noteData?.endDate || formattingDateWithBar(new Date()),
    }),
    [noteData]
  );

  const templateData = useMemo(
    () =>
      isTemplateNote(noteData!)
        ? {
            answerWhatActivity: noteData.answerWhatActivity || '',
            answerHowToPrepare: noteData.answerHowToPrepare || '',
            answerWhatIsDisappointedThing: noteData.answerWhatIsDisappointedThing || '',
            answerHowToFix: noteData.answerHowToFix || '',
            documentList: noteData.documentList || [],
          }
        : {
            answerWhatActivity: '',
            answerHowToPrepare: '',
            answerWhatIsDisappointedThing: '',
            answerHowToFix: '',
            documentList: [],
          },
    [noteData]
  );

  const customData = useMemo(
    () =>
      isCustomNote(noteData!)
        ? {
            contents: noteData.contents || '',
            documentList: noteData.documentList || [],
          }
        : {
            contents: '',
            documentList: [],
          },
    [noteData]
  );

  const handleTabClick = (tabId: number) => setSelectedTab(tabId);

  const { mutate: templateMutation } = $api.useMutation('patch', '/api/v1/notes/template/{noteId}');
  const { mutate: customMutation } = $api.useMutation('patch', '/api/v1/notes/free/{noteId}');

  const buildCommonPayload = () => ({
    title: noteDetail.title,
    complete: noteDetail.complete,
    startDate: noteDetail.startDate,
    endDate: noteDetail.endDate,
    timeBlockIds: noteDetail.timeBlockList.map((item) => item.id),
    teamId,
  });

  const handleSubmit = () => {
    if (!noteData) {
      console.log('노트 데이터가 없습니다');
      return;
    }

    if (isTemplateNote(noteData)) {
      templateMutation({
        params: { path: { noteId: parseInt(noteId!) } },
        body: {
          ...buildCommonPayload(),
          answerWhatActivity: templateData.answerWhatActivity,
          answerHowToPrepare: templateData.answerHowToPrepare,
          answerWhatIsDisappointedThing: templateData.answerWhatIsDisappointedThing,
          answerHowToFix: templateData.answerHowToFix,
          documentIds: templateData.documentList.map((item) => item.id),
        },
      });
    }

    if (isCustomNote(noteData)) {
      customMutation({
        params: { path: { noteId: parseInt(noteId!) } },
        body: {
          ...buildCommonPayload(),
          contents: customData.contents,
          documentIds: customData.documentList.map((item) => item.id),
        },
      });
    }
  };

  return (
    <section css={noteSectionStyle}>
      <Suspense fallback={<div>로딩 중입니다...</div>}>
        <NoteInfo detail={noteDetail} setDetail={() => {}} />
      </Suspense>

      <TabRoot css={{ flexGrow: '1' }}>
        <TabList selectedTab={selectedTab} onTabClick={handleTabClick}>
          <TabButton css={tabButtonStyle}>템플릿 작성</TabButton>
          <TabButton css={tabButtonStyle}>자유 작성</TabButton>
        </TabList>

        <Flex style={{ gap: '0.8rem', justifyContent: 'end', margin: '3rem 0 1.6rem 0' }}>
          <Button variant="tertiary" size="small" onClick={() => navigate(PATH.HANDOVER)}>
            작성 취소
          </Button>
          <CommandButton commandKey="S" isCommand={true} size="small" type="submit" onClick={handleSubmit}>
            저장
          </CommandButton>
        </Flex>

        <TabPanel selectedTab={selectedTab}>
          <Template data={templateData as TemplateNoteData} />
          <Custom data={customData as CustomNoteData} />
        </TabPanel>
      </TabRoot>
    </section>
  );
};

export default NotePage;
