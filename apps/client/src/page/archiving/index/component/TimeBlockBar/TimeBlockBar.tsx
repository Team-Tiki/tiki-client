import { IcClose } from '@tiki/icon';
import { Flex } from '@tiki/ui';

import { useState } from 'react';

import BlockInfo from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo';
import TaggedNotes from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNotes';
import { closeBtnStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import UploadedDocuments from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss';

import { DrawerContent } from '@/shared/store/drawer';

interface TimeBlockBarProps {
  content: DrawerContent;
  onCloseDrawer: () => void;
}

const TimeBlockBar = ({ content, onCloseDrawer }: TimeBlockBarProps) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable((prevState) => !prevState);
  };

  return (
    content && (
      <section>
        <IcClose width={16} height={16} css={closeBtnStyle} onClick={onCloseDrawer} />

        <Flex styles={{ direction: 'column', gap: '3.6rem' }}>
          <BlockInfo
            timeBlockId={content.timeBlockId}
            name={content.name}
            color={content.color}
            startDate={content.startDate}
            endDate={content.endDate}
            isEditable={isEditable}
            onEditClick={handleEditClick}
            blockType={content.blockType}
          />
          <TaggedNotes isEditable={isEditable} />
          <UploadedDocuments isEditable={isEditable} />
        </Flex>
      </section>
    )
  );
};

export default TimeBlockBar;
