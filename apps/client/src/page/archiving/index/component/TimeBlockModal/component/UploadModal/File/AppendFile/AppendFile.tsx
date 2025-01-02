import { IcFileUpload } from '@tiki/icon';
import { Button, Flex, Text, scrollStyle } from '@tiki/ui';

import { useEffect, useState } from 'react';

import {
  boxStyle,
  buttonStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/AppendFile/AppendFile.style';
import BlockItem from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/AppendFile/File/BlockItem';
import useFile from '@/page/archiving/index/component/TimeBlockModal/hook/common/useFile';

interface AppendFileProps {
  onFilesChange: (files: File[]) => void;
}

const AppendFile = ({ onFilesChange }: AppendFileProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<{ [key: string]: string }>({});
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [isAllUploaded, setIsAllUploaded] = useState(true);

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

  useEffect(() => {
    const allUploaded =
      files.length === 0 || (files.length > 0 && Object.values(uploadStatus).every((status) => status));

    setIsAllUploaded(allUploaded);
    onFilesChange(files);
  }, [uploadStatus, files, onFilesChange]);

  const handleDelete = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));

    setFileUrls((prevUrls) => {
      const newUrls = { ...prevUrls };
      delete newUrls[fileName];

      return newUrls;
    });

    setUploadStatus((prevStatus) => {
      const newStatus = { ...prevStatus };
      delete newStatus[fileName];

      return newStatus;
    });
  };

  return (
    <>
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

          <Button variant="outline" css={buttonStyle} onClick={() => fileInputRef.current?.click()}>
            파일 브라우저
          </Button>
        </Flex>
      </Flex>
      <div className="scroll" css={scrollStyle}>
        {files.map((file) => (
          <BlockItem
            key={file.name}
            title={file.name}
            onDelete={() => handleDelete(file.name)}
            isUploading={!uploadStatus[file.name]}
          />
        ))}
      </div>
    </>
  );
};

export default AppendFile;
