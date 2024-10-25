import { useCallback, useState } from 'react';

import Button from '@/common/component/Button/Button';
import CommandButton from '@/common/component/CommandButton/CommandButton';
import DatePicker from '@/common/component/DatePicker';
import Flex from '@/common/component/Flex/Flex';
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
        <input css={titleStyle} placeholder="노트 제목" />
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
            <DatePicker variant="range" triggerWidth="12" />
          </li>
        </ul>
      </aside>

      <Flex styles={{ gap: '3rem' }}>
        <Tab>
          <Tab.List selectedTab={selectedTab} onTabClick={handleTabClick}>
            <Tab.Button css={tabButtonStyle}>템플릿 작성</Tab.Button>
            <Tab.Button css={tabButtonStyle}>자유 작성</Tab.Button>
          </Tab.List>
          <Flex style={{ gap: '0.8rem', justifyContent: 'end', margin: '3rem 0 1.6rem 0' }}>
            <Button variant="tertiary" size="small">
              작성 취소
            </Button>
            <CommandButton commandKey="S" isCommand={true} size="small">
              저장
            </CommandButton>
          </Flex>
          <Tab.Panel selectedTab={selectedTab}>
            <Template />
            <Custom />
          </Tab.Panel>
        </Tab>
      </Flex>
    </section>
  );
};

export default NotePage;
