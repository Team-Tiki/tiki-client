import { Button, CommandButton, Flex, TabButton, TabList, TabPanel, TabRoot } from '@tiki/ui';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Custom from '@/page/handover/note/component/Custom/Custom';
import NoteDetail from '@/page/handover/note/component/NoteDetail/NoteDetail';
import Template from '@/page/handover/note/component/Template/Template';
import { NoteDetailType } from '@/page/handover/note/type/note';
import { formattingDateWithBar } from '@/page/handover/note/util/date';

import { $api } from '@/shared/api/client';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

import { noteSectionStyle, tabButtonStyle } from './NotePage.style';

const NotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const navigate = useNavigate();
  const teamId = useInitializeTeamId();

  const { data: noteData } = $api.useQuery('get', '/api/v1/notes/{teamId}/{noteId}', {
    params: {
      path: {
        teamId,
        noteId: 30,
      },
    },
  });

  const [noteDetail, setNoteDetail] = useState<NoteDetailType>({
    title: noteData?.title || '',
    author: noteData?.author || '',
    complete: noteData?.complete || false,
    timeBlockList: noteData?.timeBlockList || [],
    startDate: noteData?.startDate || formattingDateWithBar(new Date()),
    endDate: noteData?.endDate || formattingDateWithBar(new Date()),
  });

  const [templateData, setTemplateData] = useState({
    answerWhatActivity: '',
    answerHowToPrepare: '',
    answerWhatIsDisappointedThing: '',
    answerHowToFix: '',
    documentList: noteData?.documentList || [],
  });

  const [customData, setCustomData] = useState({
    contents: '',
  });

  const handleTabClick = (tabId: number) => setSelectedTab(tabId);

  const { mutate: templateMutation } = $api.useMutation('post', '/api/v1/notes/template');
  const { mutate: submitFree } = $api.useMutation('post', '/api/v1/notes/free');

  const handleSubmit = () => {
    if (!noteData) {
      console.log('노트 데이터가 없습니다');
      return;
    }

    if (noteData.noteType === 'TEMPLATE') {
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
            timeBlockIds: noteData.timeBlockList?.map((item) => item.id!),
            documentIds: templateData.documentList?.map((item) => item.id!),
            teamId,
          },
        },
        {
          onSuccess: () => {
            alert('템플릿 노트가 저장되었습니다.');
            navigate(PATH.HANDOVER);
          },
          onError: (error) => {
            console.error('에러 발생:', error);
            alert('템플릿 노트 저장에 실패했습니다.');
          },
        }
      );
    }

    if (noteData.noteType === 'FREE') {
      submitFree(
        {
          body: {
            title: noteDetail.title,
            complete: noteDetail.complete,
            startDate: noteDetail.startDate,
            endDate: noteDetail.endDate,
            contents: customData.contents,
            timeBlockIds: noteData.timeBlockList?.map((item) => item.id!),
            documentIds: templateData.documentList?.map((item) => item.id!),
            teamId,
          },
        },
        {
          onSuccess: () => {
            alert('자유 노트가 저장되었습니다.');
            navigate(PATH.HANDOVER);
          },
          onError: (error) => {
            console.error('에러 발생:', error);
            alert('자유 노트 저장에 실패했습니다.');
          },
        }
      );
    }
  };

  return (
    <section css={noteSectionStyle}>
      <NoteDetail detail={noteDetail} setDetail={setNoteDetail} />
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
          <Template data={templateData} setData={setTemplateData} />
          <Custom data={customData} setData={setCustomData} />
        </TabPanel>
      </TabRoot>
    </section>
  );
};

export default NotePage;
