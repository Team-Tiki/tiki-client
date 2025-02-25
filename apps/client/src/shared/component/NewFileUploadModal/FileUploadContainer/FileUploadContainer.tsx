import { IcFileUpload } from '@tiki/icon';
import { Button, Flex, Text } from '@tiki/ui';

import React, { Dispatch, SetStateAction } from 'react';

import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { boxStyle, uploadBoxStyle } from '@/shared/component/NewFileUploadModal/NewFileImportModal.style';
import { FileWithDocumentId } from '@/shared/component/NewFileUploadModal/NewFileUploadModal';
import useFile from '@/shared/component/TimeBlockModal/hook/common/useFile';

interface FileUploadContainerProps {
  size: 'medium' | 'large';
  files: FileWithDocumentId[];
  setFiles: Dispatch<SetStateAction<FileWithDocumentId[]>>;
  setFileUrls: React.Dispatch<React.SetStateAction<Files>>;
  setUploadStatus: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

const FileUploadContainer = ({ size, files, setFiles, setFileUrls, setUploadStatus }: FileUploadContainerProps) => {
  const { fileInputRef, handleFileChange, handleDragOver, handleDrop } = useFile({
    files,
    onFilesChange: (newFiles) => {
      setFiles((prevFiles) => {
        const uniqueFiles = newFiles.filter(
          (newFile) => !prevFiles.some((file) => file.name === newFile.name && file.size === newFile.size)
        );

        return [...prevFiles, ...uniqueFiles];
      });
    },
    setFileUrls,
    setUploadStatus,
  });

  return (
    <Flex css={[boxStyle, uploadBoxStyle(size)]} onDragOver={handleDragOver} onDrop={(event) => handleDrop(event)}>
      <Flex tag="form" styles={{ direction: 'column', align: 'center', justify: 'center' }}>
        <input type="file" multiple style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
        <IcFileUpload width={32} height={32} css={{ marginBottom: '1.2rem' }} />
        <Flex styles={{ direction: 'column', gap: '0.8rem', align: 'center', justify: 'center' }}>
          <Text tag="body6" css={{ marginBottom: '0.8rem' }}>
            업로드할 파일을 끌어다 놓으세요.
          </Text>
          <Text tag="body8" css={{ whiteSpace: 'nowrap' }}>
            JPEG, PNG, PDF, Word 형식의 파일을 업로드할 수 있습니다.
          </Text>
          <Text tag="body8" css={{ marginBottom: '2rem' }}>
            최대 파일 크기는 50MB입니다.
          </Text>
        </Flex>
        <Button variant="outline" css={{ width: '16rem' }} onClick={() => fileInputRef.current?.click()}>
          파일 브라우저
        </Button>
      </Flex>
    </Flex>
  );
};

export default FileUploadContainer;
