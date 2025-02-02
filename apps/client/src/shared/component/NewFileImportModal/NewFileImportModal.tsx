/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, scrollStyle, useToastAction } from '@tiki/ui';

import { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { $api } from '@/shared/api/client';
import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { Modal } from '@/shared/component/Modal';
import FileUploadContainer from '@/shared/component/NewFileImportModal/FileUploadContainer/FileUploadContainer';
import { scrollBoxStyle } from '@/shared/component/NewFileImportModal/NewFileImportModal.style';
import { DocumentDetail } from '@/shared/component/TimeBlockModal';
import { flexStyle } from '@/shared/component/TimeBlockModal/component/UploadModal/UploadModal.style';
import UploadedFileItem from '@/shared/component/UploadedFileItem/UploadedFileItem';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useModalIsOpen } from '@/shared/store/modal';
import { convertToKB, getFileKey, getFileVolume } from '@/shared/util/file';

interface NewFileImportModalProps {
  size?: 'medium' | 'large';
  selectedFiles?: DocumentDetail[];
  onUploadFile?: (files: DocumentDetail[]) => void;
  onNext?: () => void;
}

export interface FileWithDocumentId extends File {
  documentId?: number;
}

const NewFileImportModal = ({
  onNext,
  selectedFiles = [],
  onUploadFile = () => {},
  size = 'medium',
}: NewFileImportModalProps) => {
  const [files, setFiles] = useState<FileWithDocumentId[]>([]);
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [fileUrls, setFileUrls] = useState<Files>({});

  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();

  const isButtonActive = files.length === 0;

  const teamId = useInitializeTeamId();
  const { createToast } = useToastAction();

  const { mutate: postDocumentMutation } = $api.useMutation('post', '/api/v1/teams/{teamId}/documents');
  const { mutate: deleteDocumentMutation } = $api.useMutation('delete', '/api/v1/teams/{teamId}/documents');
  const queryClient = useQueryClient();

  const handleUploadFile = (validFiles: FileWithDocumentId[]) => {
    postDocumentMutation(
      {
        params: { path: { teamId } },
        body: {
          documents: validFiles.map((file) => ({
            fileName: file.name,
            fileUrl: fileUrls[file.name] || '',
            fileKey: getFileKey(fileUrls[file.name]),
            capacity: convertToKB(file.size),
          })),
        },
      },
      {
        onSuccess: (data) => {
          createToast('파일이 성공적으로 업로드되었습니다.', 'success');

          const uploadedFiles = validFiles.map((file, index) => ({
            ...file,
            documentId: data?.data?.response?.[index]?.documentId ?? 0,
            name: file?.name,
            url: fileUrls[file?.name] || '',
            fileKey: getFileKey(fileUrls[file?.name]),
            size: convertToKB(file?.size),
          }));

          setFiles(uploadedFiles);

          const documentDetailList: DocumentDetail[] = uploadedFiles.map((file) => ({
            documentId: file.documentId,
            name: file.name,
            url: file.url,
            capacity: convertToKB(file.size),
            createdTime: new Date().toISOString(),
          }));

          onUploadFile?.(documentDetailList);
        },
        onError: (error) => {
          createToast(`파일 업로드 실패: ${error.message}`, 'error');
        },
      }
    );
  };

  const handleDelete = (fileName: string, documentId: number) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);

    const updatedSelectedFiles = selectedFiles.filter((file) => file.name !== fileName);
    onUploadFile(updatedSelectedFiles);

    setFiles((prev) => prev.filter((file) => file.name !== fileName));

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

    deleteDocumentMutation(
      {
        params: {
          query: { documentId: [documentId] },
          path: { teamId },
        },
      },
      {
        onSuccess: () => {
          createToast('파일이 삭제되었습니다.', 'success');
        },
        onError: (error) => {
          createToast(`파일 삭제 실패: ${error.message}`, 'error');
        },
      }
    );
  };

  const handleClose = () => {
    closeModal();
    queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/drive'] });
  };

  useEffect(() => {
    if (Object.keys(fileUrls).length > 0 && files.every((file) => fileUrls[file.name])) {
      handleUploadFile(files);
    }
  }, [fileUrls]);

  return (
    <Modal size={size} isOpen={isOpen} onClose={closeModal}>
      <Modal.Header />
      <Modal.Body>
        <Flex css={flexStyle}>
          <Flex styles={{ direction: 'column', width: '100%' }}>
            <FileUploadContainer
              size={size}
              files={files}
              setFiles={setFiles}
              setFileUrls={setFileUrls}
              setUploadStatus={setUploadStatus}
            />
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
      <Modal.Footer
        contentType="new-file"
        buttonClick={onNext ?? handleClose}
        closeModal={closeModal}
        isButtonActive={!isButtonActive}
      />
    </Modal>
  );
};

export default NewFileImportModal;
