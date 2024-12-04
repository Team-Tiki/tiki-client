import { IcNoteBlack } from '@tiki/icon';
import { Flex, Text } from '@tiki/ui';

import TaggedNoteItem from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNoteItem/TaggedNoteItem';
import { listHeaderStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';

interface TaggedNotesProps {
  isEditable: boolean;
}

// TODO: API 추가
const HANDOVER_NOTE_LIST = [
  { id: 1, title: '세상에서 제일 긴 제목을 지을거에요 나는 하하하하하하하ㅏ핳하' },
  { id: 2, title: 'OT 인수인계' },
  { id: 3, title: '엄마 나는 토스에 가고 싶어요' },
];

const TaggedNotes = ({ isEditable }: TaggedNotesProps) => {
  return (
    <Flex styles={{ direction: 'column', gap: '1.8rem' }}>
      <Flex styles={{ gap: '0.8rem', align: 'center' }}>
        <IcNoteBlack width={16} height={16} />
        <Text tag="body6" css={listHeaderStyle}>
          태그된 인수인계 노트
        </Text>
      </Flex>
      <Flex tag="ul" styles={{ direction: 'column', gap: '0.8rem' }}>
        {HANDOVER_NOTE_LIST.map((data) => (
          <TaggedNoteItem key={data.id} title={data.title} isEditable={isEditable} />
        ))}
      </Flex>
    </Flex>
  );
};

export default TaggedNotes;
