/* eslint-disable react-hooks/exhaustive-deps */
import { IcFileUpload } from '@tiki/icon';
import { Button, Flex, Text, scrollStyle, useToastAction } from '@tiki/ui';

import { useEffect, useState } from 'react';

import { $api } from '@/shared/api/client';
import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { Modal } from '@/shared/component/Modal';
import { scrollBoxStyle, uploadBoxStyle } from '@/shared/component/NewFileImportModal/NewFileImportModal.style';
import { DocumentDetail } from '@/shared/component/TimeBlockModal';
import { boxStyle } from '@/shared/component/TimeBlockModal/component/UploadModal/File/AppendFile/AppendFile.style';
import { flexStyle } from '@/shared/component/TimeBlockModal/component/UploadModal/UploadModal.style';
import useFile from '@/shared/component/TimeBlockModal/hook/common/useFile';
import UploadedFileItem from '@/shared/component/UploadedFileItem/UploadedFileItem';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useModalIsOpen } from '@/shared/store/modal';
import { convertToKB, getFileVolume } from '@/shared/util/file';

interface NewFileImportModalProps {
  size?: 'medium' | 'large';
  selectedFiles?: DocumentDetail[];
  onUpload?: (files: DocumentDetail[]) => void;
}

interface FileWithDocumentId extends File {
  documentId?: number;
}

const NewFileImportModal = ({ size = 'medium', selectedFiles, onUpload }: NewFileImportModalProps) => {
  const [files, setFiles] = useState<FileWithDocumentId[]>([]);

  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [fileUrls, setFileUrls] = useState<Files>({});

  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();

  const teamId = useInitializeTeamId();
  const { createToast } = useToastAction();

  const { mutate: postDocumentMutation } = $api.useMutation('post', '/api/v1/teams/{teamId}/documents');
  const { mutate: deleteDocumentMutation } = $api.useMutation('delete', '/api/v1/teams/{teamId}/documents');

  const { fileInputRef, handleFileChange, handleDragOver, handleDrop } = useFile({
    files,
    onFilesChange: (newFiles) => {
      setFiles((prevFiles) => {
        const uniqueFiles = newFiles.filter(
          (newFile) => !prevFiles.some((file) => file.name === newFile.name && file.size === newFile.size)
        );

        const updatedFiles = [...prevFiles, ...uniqueFiles];

        return updatedFiles;
      });
    },
    setFileUrls,
    setUploadStatus,
  });

  const handleUploadFile = (validFiles: FileWithDocumentId[]) => {
    const documentDetailList: DocumentDetail[] = [];

    postDocumentMutation(
      {
        params: {
          path: {
            teamId,
          },
        },
        body: {
          documents: validFiles.map((file) => ({
            fileName: file.name,
            fileUrl: fileUrls[file.name] || '',
            fileKey: file.name,
            capacity: convertToKB(file.size),
          })),
        },
      },
      {
        onSuccess: (data) => {
          data?.data?.response?.forEach((document, index) => {
            documentDetailList.push({
              documentId: document.documentId,
              name: validFiles[index].name,
              url: fileUrls[validFiles[index].name] || '',
              capacity: convertToKB(validFiles[index].size),
              createdTime: new Date().toISOString(),
            });
          });

          createToast('파일이 성공적으로 업로드되었습니다.', 'success');
        },
        onError: (error) => {
          createToast(`업로드 실패: ${error.message}`, 'error');
        },
      }
    );
  };

  const handleDelete = (fileName: string, documentId: number) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);

    setFileUrls((prevUrls) => {
      const updatedUrls = { ...prevUrls };
      delete updatedUrls[fileName];
      return updatedUrls;
    });

    setUploadStatus((prevStatus) => {
      const newStatus = { ...prevStatus };
      delete newStatus[fileName];
      return newStatus;
    });

    deleteDocumentMutation({
      params: {
        query: {
          documentId: [documentId],
        },
        path: {
          teamId,
        },
      },
    });
  };

  useEffect(() => {
    if (Object.keys(fileUrls).length > 0) {
      handleUploadFile(files);
    }
  }, [fileUrls]);

  return (
    <Modal size={size} isOpen={isOpen} onClose={closeModal}>
      <Modal.Header />
      <Modal.Body>
        <Flex css={flexStyle}>
          <Flex styles={{ direction: 'column', width: '100%' }}>
            <Flex
              css={[boxStyle, uploadBoxStyle(size)]}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event)}>
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
            <div css={[scrollStyle, scrollBoxStyle(size)]}>
              {files.map((file) => (
                <UploadedFileItem
                  key={file.name}
                  title={file.name}
                  fileSize={getFileVolume(file.size || 0)}
                  uploadedSize={getFileVolume(file.size || 0)}
                  onDelete={() => handleDelete(file.name, file.documentId ?? 0)}
                  isUploading={!uploadStatus[file.name]}
                  size={size}
                />
              ))}
            </div>
          </Flex>
        </Flex>
      </Modal.Body>
      <Modal.Footer contentType="new-file" buttonClick={() => closeModal()} />
    </Modal>
  );
};

export default NewFileImportModal;
