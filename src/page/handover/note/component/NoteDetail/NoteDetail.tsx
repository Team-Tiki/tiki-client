import { useCallback, useState } from 'react';

import Button from '@/common/component/Button/Button';
import DatePicker from '@/common/component/DatePicker';
import Flex from '@/common/component/Flex/Flex';
import RadioButtonGroup from '@/common/component/RadioButton/RadioGroup';
import Text from '@/common/component/Text/Text';

import { entireInfoStyle, infoContainerStyle, infoLayoutStyle, infoStyle, titleStyle } from './NoteDetail.style';

type NoteComplete = '완료' | '미완료';

const NoteDetail = () => {
  const [status, setStatus] = useState<NoteComplete>('미완료');

  const handleAppendTag = () => {
    /** 모달 호출 */
  };

  const handleChangeStatus = useCallback((value: NoteComplete) => {
    setStatus(value);
  }, []);

  return (
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
  );
};

export default NoteDetail;
