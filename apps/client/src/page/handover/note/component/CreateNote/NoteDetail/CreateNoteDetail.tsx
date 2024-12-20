import { IcPlusButton } from '@tiki/icon';
import { Button, DatePicker, Flex, RadioGroup, Text } from '@tiki/ui';

import { useCallback } from 'react';

import {
  entireInfoStyle,
  infoContainerStyle,
  infoLayoutStyle,
  infoStyle,
  inputStyle,
  plusBtnStyle,
  titleStyle,
} from '@/page/handover/note/component/NoteDetail/NoteDetail.style';
import { NoteDetailType } from '@/page/handover/note/type/note';

type Status = '완료' | '미완료';

interface NoteDetailProp {
  detail: NoteDetailType;
  setDetail: React.Dispatch<React.SetStateAction<NoteDetailType>>;
}

const CreateNoteDetail = ({ detail, setDetail }: NoteDetailProp) => {
  const handleAppendTag = () => {
    /** 태그 모달 호출 로직 */
  };

  const handleChangeStatus = useCallback(
    (value: Status) => {
      setDetail((prev) => ({ ...prev, complete: value === '완료' }));
    },
    [setDetail]
  );

  // const handleDateChange = (date: [Date, Date]) => {
  //   const [startDate, endDate] = date;
  //   setDetail((prev) => ({
  //     ...prev,
  //     startDate: startDate ? startDate.toISOString() : new Date().toISOString(),
  //     endDate: endDate ? endDate.toISOString() : new Date().toISOString(),
  //   }));
  // };

  return (
    <aside css={entireInfoStyle}>
      <input
        css={titleStyle}
        placeholder="노트 제목"
        onChange={(e) => setDetail((prev) => ({ ...prev, title: e.target.value }))}
      />

      <ul css={infoContainerStyle}>
        <li css={infoLayoutStyle}>
          <label htmlFor="author" css={infoStyle}>
            작성자
          </label>
          <input
            css={inputStyle}
            type="text"
            id="author"
            placeholder="작성자를 입력하세요."
            onChange={(e) => setDetail((prev) => ({ ...prev, author: e.target.value }))}
          />
        </li>
        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            작성 여부
          </Text>
          <RadioGroup
            options={[
              { label: '완료', value: '완료', name: 'note' },
              { label: '미완료', value: '미완료', name: 'note' },
            ]}
            onChange={(e) => handleChangeStatus(e.target.value as Status)}
            value={detail.complete ? '완료' : '미완료'}
          />
        </li>
        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            활동 태그
          </Text>
          <Flex styles={{ maxWidth: '21.8rem', gap: '0.4rem', wrap: 'wrap' }}>
            <Button variant="outline" css={plusBtnStyle} onClick={handleAppendTag}>
              <IcPlusButton width={10} height={10} />
            </Button>
          </Flex>
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

export default CreateNoteDetail;
