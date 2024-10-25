import { useCallback, useState } from 'react';

import DatePicker from '@/common/component/DatePicker';
import Heading from '@/common/component/Heading/Heading';
import RadioButtonGroup from '@/common/component/RadioButton/RadioGroup';
import { Tab } from '@/common/component/Tab';
import Text from '@/common/component/Text/Text';

import Custom from './Custom/Custom';
import {
  entireInfoStyle,
  infoContainerStyle,
  infoLayoutStyle,
  infoStyle,
  noteSectionStyle,
  radioBoxStyle,
  tabButtonStyle,
  titleStyle,
} from './NotePage.style';
import Template from './Template/Template';

type NoteComplete = '작성 완료' | '작성 미완료';

const NotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [status, setStatus] = useState<NoteComplete>('작성 미완료');
  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
  };

  const handleChangeStatus = useCallback((value: NoteComplete) => {
    setStatus(value);
  }, []);

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
            <div css={radioBoxStyle}>
              <RadioButtonGroup
                options={[
                  {
                    label: '작성 완료',
                    value: '작성 완료',
                    name: 'note',
                  },
                  {
                    label: '작성 미완료',
                    value: '작성 미완료',
                    name: 'note',
                  },
                ]}
                onChange={(e) => handleChangeStatus(e.target.value as NoteComplete)}
                value={status}
              />
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
