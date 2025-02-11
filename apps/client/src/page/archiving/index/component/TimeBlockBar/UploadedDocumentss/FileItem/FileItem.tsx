import { Flex, Text } from '@tiki/ui';

import DeleteFileButton from '@/page/archiving/index/component/TimeBlockBar/DeleteFileButton/DeleteFileButton';
import {
  circleStyle,
  containerStyle,
  fileCapacityStyle,
  fileTitleStyle,
  wrapperStyle,
} from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss/FileItem/FileItem.style';
import { Document } from '@/page/archiving/index/type/blockType';
import { selectFileIc } from '@/page/archiving/index/util/selectFileIc';

import { downloadDocument } from '@/shared/util/document';

const FileItem = ({ fileName, capacity, tagId, fileUrl }: Omit<Document, 'documentId'>) => {
  const fileType = fileName.split('.')[fileName.split('.').length - 1];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      downloadDocument(fileUrl, fileName);
    }
  };

  return (
    <li css={containerStyle}>
      <button
        aria-label={`Download ${fileUrl}`}
        css={wrapperStyle}
        onClick={() => downloadDocument(fileUrl, fileName)}
        onKeyDown={handleKeyDown}>
        <Flex styles={{ gap: '1.2rem' }}>
          <Flex css={circleStyle}>{selectFileIc(fileType)}</Flex>
          <Flex styles={{ direction: 'column', gap: '0.6rem' }}>
            <Text tag="body8" css={fileTitleStyle}>
              {fileName}
            </Text>
            <Text tag="body8" css={fileCapacityStyle}>
              {capacity}
            </Text>
          </Flex>
        </Flex>
        <DeleteFileButton tagId={tagId} />
      </button>
    </li>
  );
};

export default FileItem;
