import { Button, CommandButton, Flex, TabButton, TabList, TabPanel, TabRoot } from '@tiki/ui';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Custom from '@/page/handover/note/component/Custom/Custom';
import NoteDetail from '@/page/handover/note/component/NoteDetail/NoteDetail';
import Template from '@/page/handover/note/component/Template/Template';

import { PATH } from '@/shared/constant/path';

import { noteSectionStyle, tabButtonStyle } from './NotePage.style';

const NotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const navigate = useNavigate();

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
  };

  const handleSubmit = () => {
    /** 제출 로직 */
  };

  return (
    <section css={noteSectionStyle}>
      <NoteDetail />

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
          <Template onSubmit={handleSubmit} />
          <Custom onSubmit={handleSubmit} />
        </TabPanel>
      </TabRoot>
    </section>
  );
};

export default NotePage;
