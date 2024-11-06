import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import CommandButton from '@/common/component/CommandButton/CommandButton';
import Flex from '@/common/component/Flex/Flex';
import { Tab } from '@/common/component/Tab';

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

      <Tab css={{ flexGrow: '1' }}>
        <Tab.List selectedTab={selectedTab} onTabClick={handleTabClick}>
          <Tab.Button css={tabButtonStyle}>템플릿 작성</Tab.Button>
          <Tab.Button css={tabButtonStyle}>자유 작성</Tab.Button>
        </Tab.List>
        <Flex style={{ gap: '0.8rem', justifyContent: 'end', margin: '3rem 0 1.6rem 0' }}>
          <Button variant="tertiary" size="small" onClick={() => navigate(PATH.HANDOVER)}>
            작성 취소
          </Button>
          <CommandButton commandKey="S" isCommand={true} size="small" type="submit" onClick={handleSubmit}>
            저장
          </CommandButton>
        </Flex>
        <Tab.Panel selectedTab={selectedTab}>
          <Template onSubmit={handleSubmit} />
          <Custom onSubmit={handleSubmit} />
        </Tab.Panel>
      </Tab>
    </section>
  );
};

export default NotePage;
