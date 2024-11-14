import IcArrowRight from '@/common/asset/svg/ic_subdirectory_arrow_right.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import { handoverNoteItemStyle } from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNoteItem/TaggedNoteItem.style';

interface TaggedNoteItemProps {
  title: string;
  isEdit: boolean;
}

const TaggedNoteItem = ({ title, isEdit }: TaggedNoteItemProps) => {
  return (
    <Flex tag="li" styles={{ gap: '0.8rem', width: '100%' }} style={{ overflow: 'hidden' }}>
      <IcArrowRight width={16} height={16} />
      <Button disabled={isEdit} variant="outline" size="xSmall" css={handoverNoteItemStyle}>
        {title}
      </Button>
    </Flex>
  );
};

export default TaggedNoteItem;
