import { IcPlusButton } from '@tiki/icon';
import { Button, DatePicker, Flex, RadioGroup, Text } from '@tiki/ui';

import { useCallback, useEffect, useState } from 'react';

import {
  entireInfoStyle,
  infoContainerStyle,
  infoLayoutStyle,
  infoStyle,
  plusBtnStyle,
  titleStyle,
} from '@/page/handover/note/component/ModifyNote/NoteInfo/NoteInfo.style';
import { NoteInfoType } from '@/page/handover/note/type/note';
import { formatDateToString } from '@/page/signUp/info/util/date';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

type Status = '완료' | '미완료';

interface NoteDetailProp {
  detail: NoteInfoType;
  setDetail: React.Dispatch<React.SetStateAction<NoteInfoType>>;
}

const CreateNoteDetail = ({ detail, setDetail }: NoteDetailProp) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const teamId = useInitializeTeamId();
  const accessToken = localStorage.getItem('ACCESS_TOKEN_KEY');

  const { data: memberData } = $api.useQuery('get', '/api/v1/team-member/teams/{teamId}/members/position', {
    params: {
      path: { teamId },
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const handleAppendTag = () => {
    /** 태그 모달 호출 로직 */
  };

  const handleChangeStatus = useCallback(
    (value: Status) => {
      setDetail((prev) => ({ ...prev, complete: value === '완료' }));
    },
    [setDetail]
  );

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  useEffect(() => {
    setDetail({
      ...detail,
      startDate: formatDateToString(startDate)!,
      endDate: formatDateToString(endDate)!,
    });
  }, [startDate, endDate, memberData]);

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
          <Text tag="body6">{memberData?.data?.name}</Text>
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
          <DatePicker onChange={handleDateChange} variant="range" triggerWidth="12" />
        </li>
      </ul>
    </aside>
  );
};

export default CreateNoteDetail;
