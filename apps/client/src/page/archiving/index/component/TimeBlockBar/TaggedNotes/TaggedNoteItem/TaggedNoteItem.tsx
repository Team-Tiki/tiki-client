import { IcSubdirectoryArrowRight } from '@tiki/icon';
import { Button, Flex } from '@tiki/ui';

import { handoverNoteItemStyle } from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNoteItem/TaggedNoteItem.style';

interface TaggedNoteItemProps {
  title: string;
  isEditable: boolean;
}

const TaggedNoteItem = ({ title, isEditable }: TaggedNoteItemProps) => {
  return (
    <Flex tag="li" styles={{ gap: '0.8rem', width: '100%' }} style={{ overflow: 'hidden' }}>
      <IcSubdirectoryArrowRight width={16} height={16} />
      <Button disabled={isEditable} variant="outline" size="xSmall" css={handoverNoteItemStyle}>
        {title}
      </Button>
    </Flex>
  );
};

export default TaggedNoteItem;
