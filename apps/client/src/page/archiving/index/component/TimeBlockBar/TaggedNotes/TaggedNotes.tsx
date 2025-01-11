import { IcNoteBlack } from '@tiki/icon';
import { Flex, Text } from '@tiki/ui';

import TaggedNoteItem from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNoteItem/TaggedNoteItem';
import { listHeaderStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import { Notes } from '@/page/archiving/index/type/blockType';

interface TaggedNotesProps {
  isEditable: boolean;
  notes: Notes;
}

const TaggedNotes = ({ isEditable, notes }: TaggedNotesProps) => {
  return (
    <Flex styles={{ direction: 'column', gap: '1.8rem' }}>
      <Flex styles={{ gap: '0.8rem', align: 'center' }}>
        <IcNoteBlack width={16} height={16} />
        <Text tag="body6" css={listHeaderStyle}>
          태그된 인수인계 노트
        </Text>
      </Flex>
      <Flex tag="ul" styles={{ direction: 'column', gap: '0.8rem' }}>
        {notes?.map((data) => <TaggedNoteItem key={data.noteId} title={data.noteName} isEditable={isEditable} />)}
      </Flex>
    </Flex>
  );
};

export default TaggedNotes;
