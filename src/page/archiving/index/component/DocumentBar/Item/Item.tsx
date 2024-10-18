/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import TrashBox from '@/common/asset/svg/ic_delete.svg?react';
import Download from '@/common/asset/svg/ic_download.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import { containerStyle, fileNameStyle } from '@/page/archiving/index/component/DocumentBar/Item/Item.style';
import { downloadDocument } from '@/page/archiving/index/util/document';

import { useOpenModal } from '@/shared/store/modal';

interface ItemProps {
  documentId: number;
  children?: ReactNode;
  blockName?: string;
  fileUrl: string;
  color?: string;
  fileName: string;
}

const Item = ({ documentId, children, fileUrl, fileName }: ItemProps) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const teamId = searchParams.get('teamId');

  const openModal = useOpenModal();

  const onClickDocumentItem = () => {
    window.open(fileUrl);
  };

  const handleDownloadClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    downloadDocument(fileUrl, fileName);
    e.stopPropagation();
  };

  const handleTrashBoxClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();

    openModal('delete', { teamId: +teamId!, itemId: documentId, itemType: 'docs' });
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions  */}
      <li css={containerStyle} onClick={onClickDocumentItem}>
        {children}
        <Flex>
          <Text tag="body6" css={fileNameStyle}>
            {fileName}
          </Text>
          <Download width={20} height={20} css={{ cursor: 'pointer' }} onClick={handleDownloadClick} />
          <TrashBox width={20} height={20} onClick={(e) => handleTrashBoxClick(e)} css={{ cursor: 'pointer' }} />
        </Flex>
      </li>
    </>
  );
};
export default Item;
