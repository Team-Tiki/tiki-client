import { IcClose } from '@tiki/icon';

import { deleteBtnStyle } from '@/page/archiving/index/component/TimeBlockBar/DeleteFileButton/DeleteFileButton.style';
import { Block, BlockDetail } from '@/page/archiving/index/type/blockType';

import { useDrawerAction, useDrawerContent } from '@/shared/store/drawer';

interface DeleteFileButtonProps {
  tagId: number;
}

const DeleteFileButton = ({ tagId }: DeleteFileButtonProps) => {
  const { documents } = useDrawerContent() as Block & BlockDetail;
  const { setContent } = useDrawerAction();

  const handleFileDeleteButtonClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();

    const filteredDocuments = documents.filter((document) => document.tagId !== tagId);
    setContent('documents', filteredDocuments);
  };

  return <IcClose width={32} height={32} css={deleteBtnStyle} onClick={handleFileDeleteButtonClick} />;
};

export default DeleteFileButton;
