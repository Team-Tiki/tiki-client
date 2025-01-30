import { IcNoteBlack } from '@tiki/icon';
import { Flex, Text } from '@tiki/ui';

import TaggedNoteItem from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNoteItem/TaggedNoteItem';
import { listHeaderStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';

import { useDrawerContent } from '@/shared/store/drawer';

interface TaggedNotesProps {
  isEditable: boolean;
}

const TaggedNotes = ({ isEditable }: TaggedNotesProps) => {
  const content = useDrawerContent();

  return (
    <Flex styles={{ direction: 'column', gap: '1.8rem' }}>
      <Flex styles={{ gap: '0.8rem', align: 'center' }}>
        <IcNoteBlack width={16} height={16} />
        <Text tag="body6" css={listHeaderStyle}>
          태그된 인수인계 노트
        </Text>
      </Flex>
      <Flex tag="ul" styles={{ direction: 'column', gap: '0.8rem' }}>
        {content?.notes?.map((data) => (
          <TaggedNoteItem key={data.noteId} noteId={data.noteId} title={data.noteName} isEditable={isEditable} />
        ))}
      </Flex>
    </Flex>
  );
};

export default TaggedNotes;
