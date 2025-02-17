import { IcSubdirectoryArrowRight } from '@tiki/icon';
import { Button, Flex } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import { handoverNoteItemStyle } from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNoteItem/TaggedNoteItem.style';

import { PATH } from '@/shared/constant/path';

interface TaggedNoteItemProps {
  noteId: number;
  title: string;
  isEditable: boolean;
}

const TaggedNoteItem = ({ noteId, title, isEditable }: TaggedNoteItemProps) => {
  const navigate = useNavigate();

  const handleTagClick = () => {
    navigate(`${PATH.HANDOVER}/${noteId}`);
  };

  return (
    <Flex tag="li" styles={{ gap: '0.8rem', width: '100%' }} style={{ overflow: 'hidden' }}>
      <IcSubdirectoryArrowRight width={16} height={16} />
      <Button
        disabled={isEditable}
        variant="outline"
        size="xSmall"
        css={handoverNoteItemStyle}
        onClick={handleTagClick}>
        {title}
      </Button>
    </Flex>
  );
};

export default TaggedNoteItem;
