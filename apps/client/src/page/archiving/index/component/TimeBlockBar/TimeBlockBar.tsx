import { IcClose } from '@tiki/icon';

import { useState } from 'react';

import BlockInfo from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo';
import TaggedNotes from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNotes';
import { closeBtnStyle, formStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import UploadedDocuments from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss';

import { useDrawerAction } from '@/shared/store/drawer';

const TimeBlockBar = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { closeDrawer } = useDrawerAction();

  const handleEditClick = () => {
    setIsEditable((prevState) => !prevState);
  };

  return (
    <section>
      <IcClose width={16} height={16} css={closeBtnStyle} onClick={closeDrawer} />

      <form css={formStyle}>
        <BlockInfo isEditable={isEditable} onEditClick={handleEditClick} />
        <TaggedNotes isEditable={isEditable} />
        <UploadedDocuments isEditable={isEditable} />
      </form>
    </section>
  );
};

export default TimeBlockBar;
