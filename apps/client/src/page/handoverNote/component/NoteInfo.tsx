import { IcAvatar, IcPlusButton } from '@tiki/icon';
import { Button, DatePicker, Flex, RadioGroup, Tag, Text } from '@tiki/ui';

import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

import { SINGLE_LINE_HEIGHT } from '@/page/handover/constant';
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
import { CreateNoteInfoType } from '@/page/handoverNote/type/note';
import { resizeTextarea } from '@/page/handoverNote/util/resizeTextarea';

import { ActivityTag } from '@/shared/component/ActivityTagModal/ActivityTagModal';
import { useOpenModal } from '@/shared/store/modal';

interface NoteDetailProp {
  info: CreateNoteInfoType;
  setInfo: React.Dispatch<SetStateAction<CreateNoteInfoType>>;
}

const NoteInfo = ({ info, setInfo }: NoteDetailProp) => {
  const [isWrapped, setIsWrapped] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const tagContainerRef = useRef<HTMLDivElement>(null);

  const openModal = useOpenModal();

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInfo((prev) => ({ ...prev, title: e.target.value }));

    resizeTextarea(textareaRef);
  };

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
    openModal('activity-tag', {
      selectedTags: info.timeBlockList?.map((tag) => ({
        timeBlockId: tag.id,
        name: tag.name,
        color: tag.color,
        type: 'MEETING',
        startDate: '',
      })),
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

  // 활동 태그가 wrap되면 레이아웃 변경
  useEffect(() => {
    if (tagContainerRef.current) {
      const { offsetHeight } = tagContainerRef.current;
      const singleLineHeight = SINGLE_LINE_HEIGHT;

      setIsWrapped(offsetHeight > singleLineHeight);
    }
  }, [info.timeBlockList]);

  return (
    <aside css={entireInfoStyle}>
      <textarea
        ref={textareaRef}
        css={titleStyle}
        placeholder={'노트제목'}
        value={info.title || ''}
        onChange={handleTitleChange}
        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
      />
      <ul css={infoContainerStyle}>
        <li css={infoLayoutStyle(isWrapped)}>
          <Flex styles={{ justify: 'center', align: 'center', gap: '2rem' }}>
            <Text tag="body6" css={infoStyle}>
              작성자
            </Text>
            <Flex styles={{ align: 'center', gap: '0.4rem' }}>
              <IcAvatar width={22} height={22} />
              <Text tag="body6">{info?.author}</Text>
            </Flex>
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
            onChange={(e) => handleChangeStatus(e.target.value)}
            value={info?.complete ? '완료' : '미완료'}
          />
        </li>

        <li css={infoLayoutStyle(isWrapped)}>
          <Text tag="body6" css={infoStyle}>
            활동 태그
          </Text>
          <div ref={tagContainerRef} css={tagLayoutStyle}>
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
          <DatePicker
            onChange={handleDateChange}
            defaultSelectedDate={info.startDate ? new Date(info.startDate) : new Date()}
            defaultEndDate={info.endDate ? new Date(info.endDate) : new Date()}
            variant="range"
            triggerWidth="12"
          />
        </li>
      </ul>
    </aside>
  );
};

export default NoteInfo;
