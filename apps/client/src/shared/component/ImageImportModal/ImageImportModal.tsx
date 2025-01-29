import { IcFileUpload } from '@tiki/icon';
import { Button, Flex, Text } from '@tiki/ui';

import { useState } from 'react';

import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { boxStyle, imageStyle, uploadBoxStyle } from '@/shared/component/ImageImportModal/ImageImportModal.style';
import { Modal } from '@/shared/component/Modal';
import useFile from '@/shared/component/TimeBlockModal/hook/common/useFile';
import UploadedFileItem from '@/shared/component/UploadedFileItem/UploadedFileItem';
import { IMAGE_MODAL } from '@/shared/constant';
import { useCloseModal } from '@/shared/store/modal';
import { getFileVolume } from '@/shared/util/file';

const ImageImportModal = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [fileUrls, setFileUrls] = useState<Files>({});

  const { fileInputRef, handleFiles, isDragover, handleDragOver, handleDrop, handleDragLeave } = useFile({
    files: file ? [file] : [],
    onFilesChange: (newFiles) => {
      if (newFiles.length > 0) {
        setFile(newFiles[0]);
      }
    },
    setFileUrls,
    setUploadStatus,
  });

  const closeModal = useCloseModal();

  const isUploadComplete = file ? uploadStatus[file.name] === true : false;
  const uploadedFileUrl = file ? (fileUrls[file.name] ?? '') : '';

  let infoText = IMAGE_MODAL.SELECT.INFO_TEXT;
  if (file) {
    infoText = isUploadComplete ? `${file.name}` : IMAGE_MODAL.LOADING.INFO_TEXT;
  }

  return (
    <>
      <Modal.Header infoText={infoText} />
      <Modal.Body>
        <Flex styles={{ direction: 'column', paddingTop: '2rem', width: '100%' }}>
          {isUploadComplete && uploadedFileUrl ? (
            <Flex styles={{ direction: 'column', align: 'center', justify: 'center' }}>
              <img src={uploadedFileUrl} alt="팀 대표" css={imageStyle} />
            </Flex>
          ) : !file ? (
            <Flex
              css={[boxStyle, uploadBoxStyle(isDragover)]}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}>
              <Flex tag="form" styles={{ direction: 'column', align: 'center', justify: 'center' }}>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={(e) => handleFiles(e.target.files)}
                />
                <IcFileUpload width={32} height={32} css={{ marginBottom: '1.2rem' }} />
                <Flex styles={{ direction: 'column', gap: '0.8rem', align: 'center', justify: 'center' }}>
                  <Text tag="body6" css={{ marginBottom: '0.8rem' }}>
                    업로드할 파일을 끌어다 놓으세요.
                  </Text>
                  <Text tag="body8" css={{ whiteSpace: 'nowrap' }}>
                    최소 360x360px 최대 700x700px 크기의
                  </Text>
                  <Text tag="body8" css={{ marginBottom: '2rem' }}>
                    PNG 혹은 JPG 파일만 업로드 가능합니다.
                  </Text>
                </Flex>
                <Button variant="outline" css={{ width: '16rem' }} onClick={() => fileInputRef.current?.click()}>
                  파일 브라우저
                </Button>
              </Flex>
            </Flex>
          ) : (
            <UploadedFileItem
              key={file.name}
              title={file.name}
              fileSize={getFileVolume(file.size || 0)}
              uploadedSize={getFileVolume(file.size || 0)}
              onDelete={() => setFile(null)}
              isUploading={!uploadStatus[file.name]}
              size="medium"
            />
          )}
        </Flex>
      </Modal.Body>
      <Modal.Footer contentType="image" buttonClick={() => closeModal()} closeModal={closeModal} />
    </>
  );
};

export default ImageImportModal;
