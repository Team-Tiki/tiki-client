import { Button, CommandButton, Flex, TabButton, TabList, TabPanel, TabRoot } from '@tiki/ui';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Custom from '@/page/handover/note/component/Custom/Custom';
import NoteDetail from '@/page/handover/note/component/NoteDetail/NoteDetail';
import Template from '@/page/handover/note/component/Template/Template';

import { components, paths } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

import { noteSectionStyle, tabButtonStyle } from './NotePage.style';

type NoteDetail = components['schemas']['NoteDetailGetServiceResponse'];
type Note = paths['/api/v1/notes/{teamId}/{noteId}']['get']['responses']['200']['content']['*/*'];
type NoteId = components['schemas']['NoteListGetServiceResponse']['noteGetResponseList'];

const NotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const navigate = useNavigate();

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
  };

  const teamId = useInitializeTeamId();
  const noteIdData = $api.useQuery('get', '/api/v1/notes/{teamId}', {
    params: {
      path: {
        teamId,
      },
    },
  });

  const accessToken = localStorage.getItem('ACCESS_TOKEN_KEY');

  const { data: noteData } = $api.useQuery('get', '/api/v1/notes/{teamId}/{noteId}', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      path: {
        teamId,
        noteId: noteIdData.data?.data?.noteGetResponseList?.[0]?.noteId!,
      },
    },
    enabled: !!noteIdData,
  });

  const [noteDetail, setNoteDetail] = useState({
    title: noteData?.data?.title,
    author: noteData?.data?.author,
    status: noteData?.data?.complete,

    startDate: noteData?.data?.startDate,
    endDate: noteData?.data?.endDate,
  });

  const [templateData, setTemplateData] = useState({
    answerWhatActivity: '',
    answerHowToPrepare: '',
    answerWhatIsDisappointedThing: '',
    answerHowToFix: '',
  });

  const [customData, setCustomData] = useState({
    contents: '',
  });

  const handleSubmit = () => {
    /** 제출 로직 */
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
