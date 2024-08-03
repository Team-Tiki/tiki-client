/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  blockNameStyle,
  documentItemContainerStyle,
  documentNameStyle,
} from '@/page/archiving/index/component/DocumentItem/DocumentItem.style';
import { downloadDocument } from '@/page/archiving/index/util/document';

import { ReactNode } from 'react';

import Download from '@/common/asset/svg/download.svg?react';
import TrashBox from '@/common/asset/svg/trash_box.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Modal from '@/common/component/Modal/Modal';
import Text from '@/common/component/Text/Text';
import { useModal } from '@/common/hook';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';
import { useTeamStore } from '@/shared/store/team';

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

  const { teamId } = useTeamStore();

  //문서 클릭시 띄워주는 함수
  const handleDocumentItemClick = () => {
    window.open(documentUrl);
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
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions  */}
      <li css={documentItemContainerStyle(selectedTabId)} onClick={handleDocumentItemClick}>
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
