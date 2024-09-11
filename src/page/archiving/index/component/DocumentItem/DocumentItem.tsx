import { ReactNode } from 'react';

import Download from '@/common/asset/svg/download.svg?react';
import TrashBox from '@/common/asset/svg/trash_box.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Modal from '@/common/component/Modal/Modal';
import Text from '@/common/component/Text/Text';
import { useModal } from '@/common/hook';

import {
  blockNameStyle,
  containerStyle,
  documentNameStyle,
} from '@/page/archiving/index/component/DocumentItem/DocumentItem.style';
import { downloadDocument } from '@/page/archiving/index/util/document';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';
import { useTeamId } from '@/shared/store/team';

interface DocumentItemProps {
  documentId: number;
  children: ReactNode;
  selectedTabId: string;
  blockName?: string;
  documentUrl: string;
  blockColor?: string;
}

const DocumentItem = ({
  documentId,
  children,
  selectedTabId,
  blockName,
  documentUrl,
  blockColor,
}: DocumentItemProps) => {
  const { isOpen, openModal, closeModal, currentContent } = useModal();

  const documentName = children?.toString();

  const teamId = useTeamId();

  const handleDocumentItemClick = () => {
    window.open(documentUrl);
  };

  const handleDocumentItemKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      window.open(documentUrl);
    }
  };

  const handleDownloadClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    downloadDocument(documentUrl, documentName);
    e.stopPropagation();
  };

  const handleTrashBoxClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    openModal(<DeleteModal title="docs" detail="docs" onClose={closeModal} teamId={+teamId} id={documentId} />);
  };

  return (
    <>
      <li
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        tabIndex={0}
        css={containerStyle(selectedTabId)}
        onClick={handleDocumentItemClick}
        onKeyDown={handleDocumentItemKeyDown}>
        {blockColor && (
          <div>
            <Text tag="body8" css={blockNameStyle(blockColor)}>
              {blockName}
            </Text>
          </div>
        )}
        <Flex>
          <Text tag="body6" css={documentNameStyle}>
            {documentName}
          </Text>
          <Download width={20} height={20} css={{ cursor: 'pointer' }} onClick={handleDownloadClick} />
          <TrashBox width={20} height={20} onClick={(e) => handleTrashBoxClick(e)} css={{ cursor: 'pointer' }} />
        </Flex>
      </li>
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
    </>
  );
};
export default DocumentItem;
