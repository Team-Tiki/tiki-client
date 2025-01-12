import { IcClose } from '@tiki/icon';
import { Flex } from '@tiki/ui';

import { useState } from 'react';

import BlockInfo from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo';
import TaggedNotes from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNotes';
import { closeBtnStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import UploadedDocuments from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss';

interface TimeBlockBarProps {
  onCloseDrawer: () => void;
}

const TimeBlockBar = ({ onCloseDrawer }: TimeBlockBarProps) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable((prevState) => !prevState);
  };

  return (
    <section>
      <IcClose width={16} height={16} css={closeBtnStyle} onClick={onCloseDrawer} />

      <Flex styles={{ direction: 'column', gap: '3.6rem' }}>
        <BlockInfo isEditable={isEditable} onEditClick={handleEditClick} />
        <TaggedNotes isEditable={isEditable} />
        <UploadedDocuments isEditable={isEditable} />
      </Flex>
    </section>
  );
};

export default TimeBlockBar;
