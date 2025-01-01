/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IcDelete, IcDownload } from '@tiki/icon';
import { Flex, Text } from '@tiki/ui';

import { ReactNode } from 'react';

import { containerStyle, fileNameStyle } from '@/page/archiving/index/component/DocumentBar/Item/Item.style';
import { downloadDocument } from '@/page/archiving/index/util/document';

import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

interface ItemProps {
  documentId: number;
  children?: ReactNode;
  blockName?: string;
  fileUrl: string;
  color?: string;
  fileName: string;
}

const Item = ({ documentId, children, fileUrl, fileName }: ItemProps) => {
  const teamId = useInitializeTeamId();

  const onClickDocumentItem = () => {
    window.open(fileUrl);
  };

  const handleDownloadClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    downloadDocument(fileUrl, fileName);
    e.stopPropagation();
  };

  const handleTrashBoxClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
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
          <IcDownload width={20} height={20} css={{ cursor: 'pointer' }} onClick={handleDownloadClick} />
          <IcDelete width={20} height={20} onClick={(e) => handleTrashBoxClick(e)} css={{ cursor: 'pointer' }} />
        </Flex>
      </li>
    </>
  );
};
export default Item;
