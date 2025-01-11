import { IcPlusButton } from '@tiki/icon';
import { Button, DatePicker, Flex, RadioGroup, Tag, Text } from '@tiki/ui';

import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import {
  entireInfoStyle,
  infoContainerStyle,
  infoLayoutStyle,
  infoStyle,
  plusBtnStyle,
  titleStyle,
} from '@/page/handover/note/component/ModifyNote/NoteInfo/NoteInfo.style';
import { NoteInfoType } from '@/page/handover/note/type/note';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

interface NoteDetailProp {
  detail: NoteInfoType;
  setDetail: React.Dispatch<React.SetStateAction<NoteInfoType>>;
}

const NoteDetail = ({ detail, setDetail }: NoteDetailProp) => {
  const teamId = useInitializeTeamId();

  const { noteId } = useParams();

  const { data } = $api.useSuspenseQuery('get', '/api/v1/notes/{teamId}/{noteId}', {
    params: {
      path: {
        teamId,
        noteId: parseInt(noteId!),
      },
    },
  });

  console.log(data);

  const handleChangeStatus = useCallback(
    (value: string) => {
      setDetail((prev) => ({
        ...prev,
        complete: value === '완료',
      }));
    },
    [setDetail]
  );

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setDetail((prev) => ({
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
        placeholder={data?.title || ''}
        value={data?.title || ''}
        onChange={(e) => setDetail((prev) => ({ ...prev, title: e.target.value }))}
      />
      <ul css={infoContainerStyle}>
        <li css={infoLayoutStyle}>
          <Text tag="body6" css={infoStyle}>
            작성자
          </Text>
          <Text tag="body6">{data?.author}</Text>
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
            value={data.complete ? '완료' : '미완료'}
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
            {data.timeBlockList?.map((tag) => (
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
          <DatePicker onChange={handleDateChange} variant="range" triggerWidth="12" />
        </li>
      </ul>
    </aside>
  );
};

export default NoteDetail;
