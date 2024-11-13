import IcArrowRight from '@/common/asset/svg/ic_subdirectory_arrow_right.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import { handoverNoteItemStyle } from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNoteItem/TaggedNoteItem.style';

interface TaggedNoteItemProps {
  title: string;
}

const TaggedNoteItem = ({ title }: TaggedNoteItemProps) => {
  return (
    <Flex tag="li" styles={{ gap: '0.8rem' }}>
      <IcArrowRight width={16} height={16} />
      <Text tag="body8" css={handoverNoteItemStyle}>
        {title}
      </Text>
    </Flex>
  );
};

export default TaggedNoteItem;
