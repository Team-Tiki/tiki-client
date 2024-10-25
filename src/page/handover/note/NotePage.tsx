import { useState } from 'react';

import DatePicker from '@/common/component/DatePicker';
import Heading from '@/common/component/Heading/Heading';
import { Tab } from '@/common/component/Tab';
import Tag from '@/common/component/Tag/Tag';
import Text from '@/common/component/Text/Text';

import Custom from './Custom/Custom';
import {
  entireInfoStyle,
  infoContainerStyle,
  infoLayoutStyle,
  infoStyle,
  noteSectionStyle,
  tabButtonStyle,
  tagBoxStyle,
  titleStyle,
} from './NotePage.style';
import Template from './Template/Template';

const NotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
  };

  return (
    <section css={noteSectionStyle}>
      <aside css={entireInfoStyle}>
        <Heading tag="H3" css={titleStyle}>
          노트 제목
        </Heading>
        <ul css={infoContainerStyle}>
          <li css={infoLayoutStyle}>
            <Text tag="body6" css={infoStyle}>
              작성자
            </Text>
            <Text tag="body6">정건</Text>
          </li>
          <li css={infoLayoutStyle}>
            <Text tag="body6" css={infoStyle}>
              작성 여부
            </Text>
            <div css={tagBoxStyle}>
              <Tag variant="square">작성 완료</Tag>
              <Tag variant="square">작성 미완료</Tag>
            </div>
          </li>
          <li css={infoLayoutStyle}>
            <Text tag="body6" css={infoStyle}>
              활동 기간
            </Text>
            <DatePicker variant="range" triggerWidth="10" />
          </li>
        </ul>
      </aside>

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
