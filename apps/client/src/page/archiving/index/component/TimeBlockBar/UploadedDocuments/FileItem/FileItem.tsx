import { Flex, Text } from '@tiki/ui';

import DeleteFileButton from '@/page/archiving/index/component/TimeBlockBar/DeleteFileButton/DeleteFileButton';
import {
  circleStyle,
  containerStyle,
  fileCapacityStyle,
  fileTitleStyle,
  wrapperStyle,
} from '@/page/archiving/index/component/TimeBlockBar/UploadedDocuments/FileItem/FileItem.style';
import { Document } from '@/page/archiving/index/type/blockType';
import { selectFileIc } from '@/page/archiving/index/util/selectFileIc';

import { downloadDocument } from '@/shared/util/document';
import { getFileVolume } from '@/shared/util/file';

interface FileItemProps extends Omit<Document, 'documentId'> {
  isEditable: boolean;
}

const FileItem = ({ fileName, capacity, tagId, fileUrl, isEditable }: FileItemProps) => {
  const fileType = fileName.split('.').at(-1) ?? '';

  const handleDownloadInteraction = () => {
    if (isEditable) return;

    downloadDocument(fileUrl, fileName);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      handleDownloadInteraction();
    }
  };

  return (
    <li css={containerStyle}>
      <button
        aria-label={`Download ${fileUrl}`}
        css={wrapperStyle}
        onClick={handleDownloadInteraction}
        onKeyDown={handleKeyDown}>
        <Flex styles={{ gap: '1.2rem' }}>
          <Flex css={circleStyle}>{selectFileIc(fileType)}</Flex>
          <Flex styles={{ direction: 'column', gap: '0.6rem' }}>
            <Text tag="body8" css={fileTitleStyle}>
              {fileName}
            </Text>
            <Text tag="body8" css={fileCapacityStyle}>
              {getFileVolume(capacity)}
            </Text>
          </Flex>
        </Flex>
        {isEditable && <DeleteFileButton tagId={tagId} />}
      </button>
    </li>
  );
};

export default FileItem;
