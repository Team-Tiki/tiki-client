import { IcPlusButton } from '@tiki/icon';
import { Button, DatePicker, Flex, RadioGroup, Tag, Text } from '@tiki/ui';

import { SetStateAction, useCallback } from 'react';

import {
  entireInfoStyle,
  infoContainerStyle,
  infoLayoutStyle,
  infoStyle,
  plusBtnStyle,
  titleStyle,
} from '@/page/handoverNote/component/NoteInfo/NoteInfo.style';
import { CreateNoteInfoType } from '@/page/handoverNote/type/note';

interface NoteDetailProp {
  info: CreateNoteInfoType;
  setInfo: React.Dispatch<SetStateAction<CreateNoteInfoType>>;
}

const NoteDetail = ({ info, setInfo }: NoteDetailProp) => {
  const handleChangeStatus = useCallback(
    (value: string) => {
      setInfo((prev) => ({
        ...prev,
        complete: value === '완료',
      }));
    },
    [setInfo]
  );

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setInfo((prev) => ({
      ...prev,
      startDate: startDate ? startDate.toISOString() : '',
      endDate: endDate ? endDate.toISOString() : '',
    }));
  };

  const handleAppendTag = () => {
    /** 모달 호출 */
  };

  return (
    <aside css={entireInfoStyle}>
      <input
        css={titleStyle}
        placeholder={info?.title}
        onChange={(e) => setInfo((prev) => ({ ...prev, title: e.target.value }))}
      />
      <ul css={infoContainerStyle}>
        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            작성자
          </Text>
          <Text tag="body6">{info?.author}</Text>
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
            onChange={(e) => handleChangeStatus(e.target.value)}
            value={info?.complete ? '완료' : '미완료'}
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
            {info?.timeBlockList?.map((tag) => (
              <Tag key={tag.id} color={tag.color}>
                {tag.name}
              </Tag>
            ))}
          </Flex>
        </li>

        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            활동 기간
          </Text>
          <DatePicker
            onChange={handleDateChange}
            defaultSelectedDate={new Date(info?.startDate)}
            defaultEndDate={new Date(info?.endDate)}
            variant="range"
            triggerWidth="12"
          />
        </li>
      </ul>
    </aside>
  );
};

export default NoteDetail;
