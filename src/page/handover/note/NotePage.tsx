import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import CommandButton from '@/common/component/CommandButton/CommandButton';
import DatePicker from '@/common/component/DatePicker';
import Flex from '@/common/component/Flex/Flex';
import RadioButtonGroup from '@/common/component/RadioButton/RadioGroup';
import { Tab } from '@/common/component/Tab';
import Text from '@/common/component/Text/Text';

import Custom from '@/page/handover/note/component/Custom/Custom';
import Template from '@/page/handover/note/component/Template/Template';

import { PATH } from '@/shared/constant/path';

import {
  entireInfoStyle,
  infoContainerStyle,
  infoLayoutStyle,
  infoStyle,
  noteSectionStyle,
  tabButtonStyle,
  titleStyle,
} from './NotePage.style';

type NoteComplete = '완료' | '미완료';

const NotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [status, setStatus] = useState<NoteComplete>('미완료');

  const navigate = useNavigate();

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
  };

  const handleChangeStatus = useCallback((value: NoteComplete) => {
    setStatus(value);
  }, []);

  const handleAppendTag = () => {
    /** 모달 호출 */
  };

  const handleSubmit = () => {
    /** 제출 로직 */
  };

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

            <RadioButtonGroup
              options={[
                {
                  label: '완료',
                  value: '완료',
                  name: 'note',
                },
                {
                  label: '미완료',
                  value: '미완료',
                  name: 'note',
                },
              ]}
              onChange={(e) => handleChangeStatus(e.target.value as NoteComplete)}
              value={status}
            />
          </li>
          <li css={infoLayoutStyle}>
            <Text tag="body6" css={infoStyle}>
              활동 태그
            </Text>
            <Button variant="text" css={{ padding: 0 }} onClick={handleAppendTag}>
              여기를 눌러 활동 태그를 추가해보세요
            </Button>
            {/* 태그 감싸는 Flex 컴포넌트 */}
            <Flex styles={{ maxWidth: '21.8rem', gap: '0.4rem', wrap: 'wrap' }} />
          </li>
          <li css={infoLayoutStyle}>
            <Text tag="body6" css={infoStyle}>
              활동 기간
            </Text>
            <DatePicker variant="range" triggerWidth="12" />
          </li>
        </ul>
      </aside>

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
