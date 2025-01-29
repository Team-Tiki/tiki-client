import { IcFileUpload } from '@tiki/icon';
import { Button, Flex, Text } from '@tiki/ui';

import { useState } from 'react';

import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { boxStyle, imageStyle, uploadBoxStyle } from '@/shared/component/ImageImportModal/ImageImportModal.style';
import { Modal } from '@/shared/component/Modal';
import useFile from '@/shared/component/TimeBlockModal/hook/common/useFile';
import UploadedFileItem from '@/shared/component/UploadedFileItem/UploadedFileItem';
import { useCloseModal } from '@/shared/store/modal';
import { getFileVolume } from '@/shared/util/file';

const ImageImportModal = () => {
  const [title, setTitle] = useState('');
  const [infoText, setInfoText] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [fileUrls, setFileUrls] = useState<Files>({});

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

  const closeModal = useCloseModal();

  const isUploadComplete = files.length > 0 && files.every((file) => uploadStatus[file.name]);

  return (
    <>
      <Modal.Header title={title} infoText={infoText} />
      <Modal.Body>
        <Flex styles={{ direction: 'column', paddingTop: '2rem', width: '100%' }}>
          {isUploadComplete ? (
            <Flex styles={{ direction: 'column', align: 'center', justify: 'center' }}>
              <img src={fileUrls[files[0].name]} alt="팀 대표" css={imageStyle} />
            </Flex>
          ) : files.length === 0 ? (
            <Flex css={[boxStyle, uploadBoxStyle]} onDragOver={handleDragOver} onDrop={handleDrop}>
              <Flex tag="form" styles={{ direction: 'column', align: 'center', justify: 'center' }}>
                <input
                  type="file"
                  multiple
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
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
          ) : (
            files.map((file) => (
              <UploadedFileItem
                key={file.name}
                title={file.name}
                fileSize={getFileVolume(file.size || 0)}
                uploadedSize={getFileVolume(file.size || 0)}
                onDelete={() => {}}
                isUploading={!uploadStatus[file.name]}
                size="medium"
              />
            ))
          )}
        </Flex>
      </Modal.Body>
      <Modal.Footer contentType="image" buttonClick={() => closeModal()} />
    </>
  );
};

export default ImageImportModal;
