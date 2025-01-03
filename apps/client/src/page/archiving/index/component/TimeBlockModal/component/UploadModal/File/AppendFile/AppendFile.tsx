import { IcFileUpload } from '@tiki/icon';
import { Button, Flex, Text, scrollStyle } from '@tiki/ui';

import { useState } from 'react';

import { DocumentDetail } from '@/page/archiving/index/component/TimeBlockModal';
import { boxStyle } from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/AppendFile/AppendFile.style';
import UploadedFileItem from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/AppendFile/File/UploadedFileItem';
import useFile from '@/page/archiving/index/component/TimeBlockModal/hook/common/useFile';

import { getFileVolume } from '@/shared/util/file';

interface AppendFileProps {
  selectedFiles: DocumentDetail[];
  onSelectFile: (files: DocumentDetail[]) => void;
}

interface FileWithDocumentId extends File {
  documentId?: number;
}

const AppendFile = ({ selectedFiles, onSelectFile }: AppendFileProps) => {
  const [files, setFiles] = useState<FileWithDocumentId[]>([]);
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});

  const { fileInputRef, handleFileChange, handleDragOver, handleDrop } = useFile({
    files,
    onFilesChange: (newFiles) => {
      setFiles((prevFiles) => {
        const uniqueFiles = newFiles.filter(
          (newFile) => !prevFiles.some((file) => file.name === newFile.name && file.size === newFile.size)
        );
        const updatedFiles = [...prevFiles, ...uniqueFiles];

        handleSelectFiles(updatedFiles);

        return updatedFiles;
      });
    },
    setUploadStatus,
  });

  const handleSelectFiles = (updatedFiles: FileWithDocumentId[]) => {
    const documentDetails: DocumentDetail[] = updatedFiles.map((file) => ({
      documentId: file.documentId || 0, // documentId가 없을 경우 0으로 초기화
      name: file.name,
      url: '',
      capacity: file.size,
      createdTime: new Date().toISOString(),
    }));

    onSelectFile(documentDetails);
  };

  const handleDelete = (fileName: string) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);

    const updatedSelectedFiles = selectedFiles.filter((file) => file.name !== fileName);
    onSelectFile(updatedSelectedFiles);

    setUploadStatus((prevStatus) => {
      const newStatus = { ...prevStatus };
      delete newStatus[fileName];
      return newStatus;
    });
  };

  return (
    <Flex styles={{ direction: 'column', width: '100%' }}>
      <Flex
        styles={{
          direction: 'column',
          justify: 'center',
          align: 'center',
          padding: '3.2rem 6.35rem',
          width: '100%',
        }}
        css={boxStyle}
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event)}>
        <Flex tag="form" styles={{ direction: 'column', align: 'center', justify: 'center' }}>
          <input type="file" multiple style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
          <IcFileUpload width={32} height={32} css={{ marginBottom: '1.2rem' }} />
          <Flex styles={{ direction: 'column', gap: '0.8rem', align: 'center', justify: 'center' }}>
            <Text tag="body6" css={{ marginBottom: '0.8rem' }}>
              업로드할 파일을 끌어다 놓으세요.
            </Text>
            <Text tag="body8">JPEG, PNG, PDF, Word 형식의 파일을 업로드할 수 있습니다.</Text>
            <Text tag="body8" css={{ marginBottom: '2rem' }}>
              최대 파일 크기는 50MB입니다.
            </Text>
          </Flex>

          <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
            파일 브라우저
          </Button>
        </Flex>
      </Flex>
      <div css={[scrollStyle, { maxHeight: '25rem', overflow: 'scroll' }]}>
        {files.map((file) => (
          <UploadedFileItem
            key={file.name}
            title={file.name}
            fileSize={getFileVolume(file.size || 0)}
            uploadedSize={getFileVolume(file.size || 0)}
            onDelete={() => handleDelete(file.name)}
            isUploading={!uploadStatus[file.name]}
          />
        ))}
      </div>
    </Flex>
  );
};

export default AppendFile;
