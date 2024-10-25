import { useState } from 'react';

import { Tab } from '@/common/component/Tab';

import Custom from './Custom/Custom';
import { noteSectionStyle, noteTitleStyle, tabButtonStyle } from './NotePage.style';
import Template from './Template/Template';

const NotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
  };

  return (
    <section css={noteSectionStyle}>
      <div css={noteTitleStyle}></div>
      <div>
        <Tab>
          <Tab.List selectedTab={selectedTab} onTabClick={handleTabClick}>
            <Tab.Button css={tabButtonStyle}>템플릿 작성</Tab.Button>
            <Tab.Button css={tabButtonStyle}>자유 작성</Tab.Button>
          </Tab.List>
          <Tab.Panel selectedTab={selectedTab}>
            <Template />
            <Custom />
          </Tab.Panel>
        </Tab>
      </div>
    </section>
  );
};

export default NotePage;
