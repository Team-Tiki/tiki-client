import { Button, CommandButton, Flex, TabButton, TabList, TabPanel, TabRoot, useToastAction } from '@tiki/ui';

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { noteSectionStyle, tabButtonStyle } from '@/page/handover/note/NotePage.style';
import CreateCustomNote from '@/page/handover/note/component/CreateNote/Custom/CreateCustomNote';
import CreateNoteDetail from '@/page/handover/note/component/CreateNote/NoteDetail/CreateNoteDetail';
import CreateTemplateNote from '@/page/handover/note/component/CreateNote/Template/CreateTemplateNote';
import { CustomNote, NoteDetailType, TemplateNote } from '@/page/handover/note/type/note';

import { $api } from '@/shared/api/client';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

const CreateNotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [noteDetail, setNoteDetail] = useState<NoteDetailType>({} as NoteDetailType);

  const [templateData, setTemplateData] = useState<TemplateNote>({} as TemplateNote);

  const [customData, setCustomData] = useState<CustomNote>({} as CustomNote);

  const navigate = useNavigate();
  const teamId = useInitializeTeamId();

  const { createToast } = useToastAction();

  const handleTabClick = (tabId: number) => setSelectedTab(tabId);

  const { mutate: templateMutation } = $api.useMutation('post', '/api/v1/notes/template');
  const { mutate: customMutation } = $api.useMutation('post', '/api/v1/notes/free');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (selectedTab == 0) {
      templateMutation(
        {
          body: {
            title: noteDetail.title,
            complete: noteDetail.complete,
            startDate: noteDetail.startDate,
            endDate: noteDetail.endDate,
            answerWhatActivity: templateData.answerWhatActivity,
            answerHowToPrepare: templateData.answerHowToPrepare,
            answerWhatIsDisappointedThing: templateData.answerWhatIsDisappointedThing,
            answerHowToFix: templateData.answerHowToFix,
            timeBlockIds: noteDetail.timeBlockList?.map((item) => item.id!),
            documentIds: templateData.documentList?.map((item) => item.id!),
            teamId,
          },
        },
        {
          onSuccess: () => {
            createToast('템플릿 노트가 저장되었습니다.', 'success');
            navigate(PATH.HANDOVER);
          },
          onError: () => {
            createToast('노트 저장에 실패했습니다', 'error');
          },
        }
      );
    }

    if (selectedTab == 1) {
      customMutation(
        {
          body: {
            title: noteDetail.title,
            complete: noteDetail.complete,
            startDate: noteDetail.startDate,
            endDate: noteDetail.endDate,
            contents: customData.contents,
            timeBlockIds: noteDetail.timeBlockList?.map((item) => item.id!),
            documentIds: templateData.documentList?.map((item) => item.id!),
            teamId,
          },
        },
        {
          onSuccess: () => {
            createToast('자유 노트가 저장되었습니다.', 'success');
            navigate(PATH.HANDOVER);
          },
          onError: () => {
            createToast('노트 저장에 실패했습니다', 'error');
          },
        }
      );
    }
  };

  return (
    <form css={noteSectionStyle} onSubmit={handleSubmit}>
      <CreateNoteDetail detail={noteDetail} setDetail={setNoteDetail} />
      <TabRoot css={{ flexGrow: '1' }}>
        <TabList selectedTab={selectedTab} onTabClick={handleTabClick}>
          <TabButton css={tabButtonStyle}>템플릿 작성</TabButton>
          <TabButton css={tabButtonStyle}>자유 작성</TabButton>
        </TabList>
        <Flex style={{ gap: '0.8rem', justifyContent: 'end', margin: '3rem 0 1.6rem 0' }}>
          <Button variant="tertiary" size="small" onClick={() => navigate(PATH.HANDOVER)}>
            작성 취소
          </Button>
          <CommandButton commandKey="S" isCommand={true} size="small" type="submit">
            저장
          </CommandButton>
        </Flex>
        <TabPanel selectedTab={selectedTab}>
          <CreateTemplateNote setData={setTemplateData} />
          <CreateCustomNote setData={setCustomData} />
        </TabPanel>
      </TabRoot>
    </form>
  );
};

export default CreateNotePage;
