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
} from '@/page/handover/note/component/NoteDetail/NoteDetail.style';
import { TAG_NAME } from '@/page/handover/note/constants/tag';

type Status = '완료' | '미완료';
interface NoteDetailType {
  detail: {
    title: string;
    status: boolean;
    period: Date;
  };
  setDetail: React.Dispatch<
    React.SetStateAction<{
      title: string;
      status: string;
      tags: Array<string>;
      period: null;
    }>
  >;
}

const NoteDetail = ({ detail, setDetail }: NoteDetailType) => {
  const handleAppendTag = () => {
    /** 모달 호출 */
  };
  const handleChangeStatus = useCallback((value: Status) => {
    setDetail((prev) => ({ ...prev, status: value }));
  }, []);

  return (
    <aside css={entireInfoStyle}>
      <input css={titleStyle} placeholder="노트 제목" value={detail.title} onChange={(e) => e.target.value} />
      <ul css={infoContainerStyle}>
        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            작성자
          </Text>
          {/* GET으로 받아온 author값 설정해야함 */}
          <Text tag="body6">정건</Text>
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
            onChange={(e) => handleChangeStatus(e.target.value as Status)}
            value={detail.status ? '완료' : '미완료'}
          />
        </li>
        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            활동 태그
          </Text>
          <Flex styles={{ maxWidth: '21.8rem', gap: '0.4rem', wrap: 'wrap' }}>
            {TAG_NAME.data.length > 0 ? (
              <>
                <Button variant="outline" css={plusBtnStyle} onClick={handleAppendTag}>
                  <IcPlusButton width={10} height={10} />
                </Button>
                {TAG_NAME.data.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
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
          <DatePicker variant="range" triggerWidth="12" />
        </li>
      </ul>
    </aside>
  );
};

export default NoteDetail;
