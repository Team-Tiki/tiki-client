import { IcPlusButton } from '@tiki/icon';
import { Button, DatePicker, Flex, RadioGroup, Tag, Text } from '@tiki/ui';

import { useCallback } from 'react';

import {
  entireInfoStyle,
  infoContainerStyle,
  infoLayoutStyle,
  infoStyle,
  plusBtnStyle,
  titleStyle,
} from '@/page/handoverNote/component/NoteDetail/NoteDetail.style';
import { NoteDetailType } from '@/page/handoverNote/type/note';

// type Status = '완료' | '미완료';

interface NoteDetailProp {
  detail: NoteDetailType;
  setDetail: React.Dispatch<React.SetStateAction<NoteDetailType>>;
}

const NoteDetail = ({ detail, setDetail }: NoteDetailProp) => {
  const handleAppendTag = () => {
    /** 모달 호출 */
  };
  const handleChangeStatus = useCallback(() => {}, []);

  const handleDateChange = () => {};

  return (
    <aside css={entireInfoStyle}>
      <input
        css={titleStyle}
        placeholder="노트 제목"
        value={detail.title}
        onChange={(e) => setDetail((prev) => ({ ...prev, title: e.target.value }))}
      />

      <ul css={infoContainerStyle}>
        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            작성자
          </Text>
          <Text tag="body6">{detail.author}</Text>
        </li>
        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            작성 여부
          </Text>
          <RadioGroup
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
            onChange={() => handleChangeStatus()}
            value={detail.complete ? '완료' : '미완료'}
          />
        </li>
        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            활동 태그
          </Text>
          <Flex styles={{ maxWidth: '21.8rem', gap: '0.4rem', wrap: 'wrap' }}>
            {detail.timeBlockList.length > 0 ? (
              <>
                <Button variant="outline" css={plusBtnStyle} onClick={handleAppendTag}>
                  <IcPlusButton width={10} height={10} />
                </Button>
                {detail.timeBlockList.map((tag) => (
                  <Tag key={tag.id} color={tag.color}>
                    {tag.name}
                  </Tag>
                ))}
              </>
            ) : (
              <Button variant="text" css={{ padding: 0 }} onClick={handleAppendTag}>
                여기를 눌러 활동 태그를 추가해보세요
              </Button>
            )}
          </Flex>
        </li>
        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            활동 기간
          </Text>
          <DatePicker onChange={handleDateChange} variant="range" triggerWidth="12" />
        </li>
      </ul>
    </aside>
  );
};

export default NoteDetail;
