import { Button, CommandButton, Flex, TabButton, TabList, TabPanel, TabRoot } from '@tiki/ui';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Custom from '@/page/handoverNote/component/Custom/Custom';
import NoteInfo from '@/page/handoverNote/component/NoteInfo/NoteInfo';
import Template from '@/page/handoverNote/component/Template/Template';
import { useNoteDetailData } from '@/page/handoverNote/hooks/queries';
import { CustomNoteData, NoteInfoType, TemplateNoteData } from '@/page/handoverNote/type/note';

import { PATH } from '@/shared/constant/path';
import { hasKeyInObject } from '@/shared/util/typeGuard';

import { noteSectionStyle, tabButtonStyle } from './index.style';

export type Document = {
  id: number;
  fileName: string;
  fileUrl: string;
  capacity: number;
};

const NotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const noteData = useNoteDetailData();
  console.log(noteData);

  const handleTabClick = (tabId: number) => setSelectedTab(tabId);

  // const { mutate: templateMutation } = $api.useMutation('patch', '/api/v1/notes/template/{noteId}');
  // const { mutate: customMutation } = $api.useMutation('patch', '/api/v1/notes/free/{noteId}');

  const handleSubmit = () => {};

  console.log(hasKeyInObject(noteData.data, 'answerWhatActivity'));
  console.log(hasKeyInObject(noteData.data, 'contents'));

  return (
    <section css={noteSectionStyle}>
      <NoteInfo info={noteData.data as unknown as NoteInfoType} setInfo={() => {}} />

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
        {hasKeyInObject(noteData, 'answerWhatActivity') ? (
          <TabPanel selectedTab={selectedTab}>
            <Template data={noteData.data as unknown as TemplateNoteData} />
            <Custom />
          </TabPanel>
        ) : hasKeyInObject(noteData, 'contents') ? (
          <TabPanel selectedTab={selectedTab}>
            <Template />
            <Custom data={noteData.data as unknown as CustomNoteData} />
          </TabPanel>
        ) : (
          <></>
        )}
      </TabRoot>
    </section>
  );
};

export default NotePage;
