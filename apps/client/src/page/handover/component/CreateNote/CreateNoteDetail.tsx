/* eslint-disable react-hooks/exhaustive-deps */
import { IcAvatar, IcPlusButton } from '@tiki/icon';
import { Button, DatePicker, Flex, RadioGroup, Tag, Text } from '@tiki/ui';

import { useCallback, useEffect, useRef, useState } from 'react';

import {
  entireInfoStyle,
  infoContainerStyle,
  infoLayoutStyle,
  infoStyle,
  plusBtnStyle,
  titleStyle,
} from '@/page/handoverNote/component/style';
import { CreateNoteInfoType, Status } from '@/page/handoverNote/type/note';
import { resizeTextarea } from '@/page/handoverNote/util/resizeTextarea';
import { formatDateToString } from '@/page/signUp/info/util/date';

import { $api } from '@/shared/api/client';
import { ActivityTag } from '@/shared/component/ActivityTagModal/ActivityTagModal';
import { STORAGE_KEY } from '@/shared/constant/api';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useOpenModal } from '@/shared/store/modal';

interface NoteDetailProp {
  detail: CreateNoteInfoType;
  setDetail: React.Dispatch<React.SetStateAction<CreateNoteInfoType>>;
}

const CreateNoteDetail = ({ detail, setDetail }: NoteDetailProp) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isTag = detail.timeBlockList?.length !== 0;

  const teamId = useInitializeTeamId();
  const accessToken = localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN_KEY);

  const { data: memberData } = $api.useQuery('get', '/api/v1/team-member/teams/{teamId}/members/position', {
    params: {
      path: { teamId },
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const openModal = useOpenModal();

  const handleAppendTag = () => {
    openModal('activity-tag', {
      onConfirm: (tags: ActivityTag[]) => {
        setDetail((prev) => ({
          ...prev,
          timeBlockList: tags.map((tag) => ({
            id: tag.timeBlockId,
            name: tag.name,
            color: tag.color,
            blockType: tag.type,
            startDate: tag.startDate,
          })),
        }));
      },
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail((prev) => ({ ...prev, title: e.target.value }));

    resizeTextarea(textareaRef);
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
      <textarea css={titleStyle} rows={1} ref={textareaRef} placeholder="노트 제목" onChange={handleTitleChange} />
      <ul css={infoContainerStyle}>
        <li css={[infoLayoutStyle(isTag), { alignItems: 'center' }]}>
          <label htmlFor="author" css={infoStyle}>
            작성자
          </label>
          <Flex styles={{ align: 'center', gap: '0.4rem' }}>
            <IcAvatar width={22} height={22} />
            <Text tag="body6">{memberData?.data?.name}</Text>
          </Flex>
        </li>
        <li css={infoLayoutStyle(isTag)}>
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
        <li css={infoLayoutStyle(isTag)}>
          <Text tag="body6" css={infoStyle}>
            활동 태그
          </Text>
          <Flex styles={{ maxWidth: '21.8rem', gap: '0.4rem', wrap: 'wrap' }}>
            <Button variant="outline" css={plusBtnStyle} onClick={handleAppendTag}>
              <IcPlusButton width={10} height={10} />
            </Button>
            {detail?.timeBlockList?.map((tag) => (
              <Tag key={tag.id} bgColor={tag.color}>
                {tag.name}
              </Tag>
            ))}
          </Flex>
        </li>
        <li css={infoLayoutStyle(isTag)}>
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
