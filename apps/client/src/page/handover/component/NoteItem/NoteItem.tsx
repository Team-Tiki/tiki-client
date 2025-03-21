import { IcAvatar, IcClose } from '@tiki/icon';
import { CheckBox, Divider, Flex, Tag, Text, theme } from '@tiki/ui';

import {
  checkBoxStyle,
  closeButtonStyle,
  containerStyle,
  profileStyle,
  wrapperStyle,
} from '@/page/handover/component/NoteItem/NoteItem.style';
import { NoteType } from '@/page/handover/type';

interface NoteItemProps extends Omit<NoteType, 'lastUpdatedAt'> {
  canSelect: boolean;
  isSelected: boolean;
  onSelect: () => void;
  onNoteDelete: (e: React.MouseEvent, ids: number[]) => void;
  onClick: () => void;
}

const formattingDateToKorean = (date: string) => {
  const [year, month, day] = date.split('-');

  return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
};

const NoteItem = ({
  noteId,
  startDate,
  endDate,
  title,
  author,
  complete,
  canSelect,
  isSelected,
  onSelect,
  onNoteDelete,
  onClick,
}: NoteItemProps) => {
  const activityPeriod = `${formattingDateToKorean(startDate)} - ${formattingDateToKorean(endDate)}`;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      onClick();
    }
  };

  return (
    <li>
      <Flex
        tag={canSelect ? 'label' : 'div'}
        css={wrapperStyle}
        onClick={canSelect ? () => {} : onClick}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}>
        <Flex styles={{ align: 'center', justify: 'space-between' }} css={containerStyle}>
          <Flex>
            <Flex styles={{ align: 'center' }}>
              {canSelect && <CheckBox isChecked={isSelected} onChange={onSelect} css={checkBoxStyle} />}
              <Text tag="body6" style={{ width: '29.4rem' }}>
                {activityPeriod}
              </Text>
            </Flex>

            <Text tag="body6" style={{ width: '34rem' }}>
              {title}
            </Text>
          </Flex>

          <Flex styles={{ gap: '0.8rem' }}>
            <Flex styles={{ align: 'center', gap: '0.4rem' }}>
              <IcAvatar css={profileStyle} />
              <Text tag="body6" style={{ width: '10.4rem' }}>
                {author}
              </Text>
            </Flex>
            <Flex styles={{ align: 'center', gap: complete ? '4.3rem' : '3.3rem' }}>
              {complete ? (
                <Tag variant="square" bgColor={theme.colors.key_400}>
                  작성 완료
                </Tag>
              ) : (
                <Tag variant="square" bgColor={theme.colors.gray_300}>
                  작성 미완료
                </Tag>
              )}
              <button css={closeButtonStyle} onClick={(e) => onNoteDelete(e, [noteId])}>
                <IcClose width={22} height={22} />
              </button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider color={theme.colors.gray_300} />
    </li>
  );
};

export default NoteItem;
