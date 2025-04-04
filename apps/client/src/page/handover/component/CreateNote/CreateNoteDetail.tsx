/* eslint-disable react-hooks/exhaustive-deps */
import { IcAvatar, IcPlusButton } from '@tiki/icon';
import { Button, DatePicker, Flex, RadioGroup, Tag, Text } from '@tiki/ui';

import { useEffect, useRef, useState } from 'react';

import { HANDOVER_TITLE_MAX, SINGLE_LINE_HEIGHT } from '@/page/handover/constant';
import { useNoteInfoForm } from '@/page/handover/hook/common/useNoteInfoForm';
import {
  entireInfoStyle,
  infoContainerStyle,
  infoLayoutStyle,
  infoStyle,
  plusBtnStyle,
  tagLayoutStyle,
  textBtnStyle,
  titleStyle,
} from '@/page/handoverNote/component/style';
import { NoteDetailProp, Status } from '@/page/handoverNote/type/note';
import { formatDateToString } from '@/page/signUp/info/util/date';

import { $api } from '@/shared/api/client';
import { STORAGE_KEY } from '@/shared/constant/api';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useOpenModal } from '@/shared/store/modal';
import { ActivityTag } from '@/shared/type/modal';

const CreateNoteDetail = ({ info, setInfo }: NoteDetailProp) => {
  const [isWrapped, setIsWrapped] = useState(false);

  const tagContainerRef = useRef<HTMLDivElement>(null);

  const teamId = useInitializeTeamId();
  const { handleTitleChange, handleChangeStatus, handleDateChange, textareaRef, startDate, endDate } = useNoteInfoForm({
    info,
    setInfo,
  });

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
        setInfo((prev) => ({
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

  useEffect(() => {
    setInfo((prev) => ({
      ...prev,
      startDate: formatDateToString(startDate) || '',
      endDate: formatDateToString(endDate) || '',
    }));
  }, [startDate, endDate]);

  // 활동 태그가 wrap되면 레이아웃 변경
  useEffect(() => {
    if (tagContainerRef.current) {
      const { offsetHeight } = tagContainerRef.current;
      const singleLineHeight = SINGLE_LINE_HEIGHT;

      setIsWrapped(offsetHeight > singleLineHeight);
    }
  }, [info?.timeBlockList]);

  return (
    <aside css={entireInfoStyle}>
      <textarea
        css={titleStyle}
        rows={1}
        maxLength={HANDOVER_TITLE_MAX}
        ref={textareaRef}
        placeholder="노트 제목"
        onChange={handleTitleChange}
        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
      />
      <ul css={infoContainerStyle}>
        <li css={[infoLayoutStyle(isWrapped), { alignItems: 'center' }]}>
          <label htmlFor="author" css={infoStyle}>
            작성자
          </label>
          <Flex styles={{ align: 'center', gap: '0.4rem' }}>
            <IcAvatar width={22} height={22} />
            <Text tag="body6">{memberData?.data?.name}</Text>
          </Flex>
        </li>

        <li css={infoLayoutStyle(isWrapped)}>
          <Text tag="body6" css={infoStyle}>
            작성 여부
          </Text>
          <RadioGroup
            options={[
              { label: '완료', value: '완료', name: 'note' },
              { label: '미완료', value: '미완료', name: 'note' },
            ]}
            onChange={(e) => handleChangeStatus(e.target.value as Status)}
            value={info?.complete ? '완료' : '미완료'}
          />
        </li>

        <li css={infoLayoutStyle(isWrapped)}>
          <Text tag="body6" css={infoStyle}>
            활동 태그
          </Text>
          <div ref={tagContainerRef} css={tagLayoutStyle(isWrapped)}>
            {info?.timeBlockList?.length === 0 ? (
              <Button variant="text" onClick={handleAppendTag} css={textBtnStyle}>
                여기를 눌러 활동 태그를 추가해보세요
              </Button>
            ) : (
              <Button variant="outline" css={plusBtnStyle} onClick={handleAppendTag}>
                <IcPlusButton width={10} height={10} />
              </Button>
            )}
            {info?.timeBlockList?.map((tag) => (
              <Tag key={tag.id} bgColor={tag.color}>
                {tag.name}
              </Tag>
            ))}
          </div>
        </li>

        <li css={infoLayoutStyle(isWrapped)}>
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
