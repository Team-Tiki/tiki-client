import { IcAvatar, IcPlusButton } from '@tiki/icon';
import { Button, DatePicker, Flex, RadioGroup, Tag, Text } from '@tiki/ui';

import { useEffect, useRef, useState } from 'react';

import { HANDOVER_TITLE_MAX, SINGLE_LINE_HEIGHT } from '@/page/handover/constant';
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
import { useNoteInfoForm } from '@/page/handoverNote/hook/common/useNoteInfoForm';
import { NoteDetailProp } from '@/page/handoverNote/type/note';
import { resizeTextarea } from '@/page/handoverNote/util/resizeTextarea';

import { useOpenModal } from '@/shared/store/modal';
import { ActivityTag } from '@/shared/type/modal';

const NoteInfo = ({ info, setInfo }: NoteDetailProp) => {
  const [isWrapped, setIsWrapped] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const tagContainerRef = useRef<HTMLDivElement>(null);

  const { handleTitleChange, handleChangeStatus, handleDateChange } = useNoteInfoForm({ setInfo });
  const openModal = useOpenModal();

  const handleAppendTag = () => {
    openModal('activity-tag', {
      selectedTags: info.timeBlockList?.map((tag) => ({
        ...tag,
        timeBlockId: tag.id,
        type: tag.blockType,
      })),
      onConfirm: (tags: ActivityTag[]) => {
        setInfo((prev) => ({
          ...prev,
          timeBlockList: tags.map((tag) => ({
            ...tag,
            id: tag.timeBlockId,
            blockType: tag.type,
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

  useEffect(() => {
    if (textareaRef.current) {
      resizeTextarea(textareaRef);
    }
  }, [info.title]);

  return (
    <aside css={entireInfoStyle}>
      <textarea
        ref={textareaRef}
        css={titleStyle}
        maxLength={HANDOVER_TITLE_MAX}
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
