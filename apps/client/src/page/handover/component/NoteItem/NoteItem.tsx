import { IcAvatar, IcClose } from '@tiki/icon';
import { CheckBox, Divider, Flex, Tag, Text, theme } from '@tiki/ui';

import {
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
  onNoteCloseClick: (ids: number[]) => void;
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
  onNoteCloseClick,
  onClick,
}: NoteItemProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      onClick();
    }
  };
  return (
    <li>
      <div css={wrapperStyle} onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e)}>
        <Flex styles={{ align: 'center', justify: 'left' }} css={containerStyle}>
          <Flex styles={{ align: 'center' }}>
            {canSelect && (
              <CheckBox isChecked={isSelected} onChange={() => onSelect?.()} style={{ marginRight: '1.6rem' }} />
            )}
            <Text tag="body6" style={{ width: '26rem' }}>
              {`${formattingDateToKorean(startDate)} - ${formattingDateToKorean(endDate)}`}
            </Text>
          </Flex>

          <Text tag="body6" style={{ width: '34rem' }}>
            {title}
          </Text>
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
            <IcClose width={18} height={18} css={closeButtonStyle} onClick={() => onNoteCloseClick([noteId])} />
          </Flex>
        </Flex>
      </div>
      <Divider color={theme.colors.gray_300} />
    </li>
  );
};

export default NoteItem;
