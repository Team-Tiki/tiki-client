/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  blockNameTextStyle,
  containerStyle,
  fileNameStyle,
} from '@/page/archiving/component/DocumentItem/DocumentItem.style';

import { ReactNode } from 'react';

import Download from '@/common/asset/svg/download.svg?react';
import TrashBox from '@/common/asset/svg/trash_box.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Modal from '@/common/component/Modal/Modal';
import Text from '@/common/component/Text/Text';
import { useModal } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';

interface DocumentItemProps {
  documentId: number;
  children: ReactNode;
  selectedId: string;
  blockName?: string;
  fileUrl: string;
  color?: string;
}

const DocumentItem = ({ documentId, children, selectedId, blockName, fileUrl, color }: DocumentItemProps) => {
  const { isOpen, openModal, closeModal, currentContent } = useModal();

  //문서 클릭시 띄워주는 함수
  const onClickDocumentItem = () => {
    window.open(fileUrl);
  };

  const handleTrashClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    openModal(<DeleteModal title="docs" detail="docs" onClose={closeModal} teamId={9} id={documentId} />);
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions  */}
      <li css={containerStyle(selectedId)} onClick={onClickDocumentItem}>
        {color && (
          <div>
            <Text tag="body8" css={blockNameTextStyle(color)}>
              {blockName}
            </Text>
          </div>
        )}
        <Flex>
          <Text tag="body6" css={fileNameStyle}>
            {children?.toString()}
          </Text>
          <Download width={20} height={20} css={{ zIndex: theme.zIndex.overlayMiddle }} />
          <TrashBox
            width={20}
            height={20}
            onClick={(e) => handleTrashClick(e)}
            css={{ zIndex: theme.zIndex.overlayMiddle }}
          />
        </Flex>
      </li>
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
    </>
  );
};
export default DocumentItem;
