/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, scrollStyle, useToastAction } from '@tiki/ui';

import { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { $api } from '@/shared/api/client';
import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { Modal } from '@/shared/component/Modal';
import FileUploadContainer from '@/shared/component/NewFileUploadModal/FileUploadContainer/FileUploadContainer';
import { flexStyle, scrollBoxStyle } from '@/shared/component/NewFileUploadModal/NewFileImportModal.style';
import { DocumentDetail } from '@/shared/component/TimeBlockModal';
import UploadedFileItem from '@/shared/component/UploadedFileItem/UploadedFileItem';
import { FILE } from '@/shared/constant/toast';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useModalIsOpen } from '@/shared/store/modal';
import { getFileKey, getFileVolume } from '@/shared/util/file';

interface NewFileImportModalProps {
  size?: 'medium' | 'large';
  selectedFiles?: DocumentDetail[];
  onUploadFile?: (files: DocumentDetail[]) => void;
  onNext?: () => void;
  onPrev?: () => void;
  contentType?: 'create-block' | 'new-file' | 'timeblock-file';
}

export interface FileWithDocumentId extends File {
  documentId?: number;
}

const NewFileUploadModal = ({
  onNext,
  onPrev,
  selectedFiles = [],
  onUploadFile = () => {},
  size = 'medium',
  contentType = 'new-file',
}: NewFileImportModalProps) => {
  const [files, setFiles] = useState<FileWithDocumentId[]>([]);
  const [uploadStatus, setUploadStatus] = useState<Record<string, boolean>>({});
  const [fileUrls, setFileUrls] = useState<Files>({});

  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();

  const isDisabled = files.length === 0;

  const teamId = useInitializeTeamId();
  const { createToast } = useToastAction();

  const queryClient = useQueryClient();

  const { mutate: postDocumentMutation } = $api.useMutation('post', '/api/v1/teams/{teamId}/documents');
  const { mutate: deleteDocumentMutation } = $api.useMutation('delete', '/api/v1/teams/{teamId}/documents');

  const handleUploadFile = async (file: FileWithDocumentId) => {
    return new Promise<void>((resolve) => {
      postDocumentMutation(
        {
          params: { path: { teamId } },
          body: {
            documents: [
              {
                fileName: file.name,
                fileUrl: fileUrls[file.name] || '',
                fileKey: getFileKey(fileUrls[file.name]),
                capacity: file.size,
              },
            ],
          },
        },
        {
          onSuccess: (data) => {
            createToast(FILE.SUCCESS.NEW_FILE, 'success');

            const uploadedFile = {
              ...file,
              documentId: data?.data?.response?.[0]?.documentId ?? 0,
              name: file.name,
              url: fileUrls[file.name] || '',
              fileKey: getFileKey(fileUrls[file.name]),
              size: file.size,
            };

            setFiles((prevFiles) => prevFiles.map((f) => (f.name === uploadedFile.name ? uploadedFile : f)));

            onUploadFile([
              ...selectedFiles,
              {
                documentId: uploadedFile.documentId,
                name: uploadedFile.name,
                url: uploadedFile.url,
                capacity: file.size,
                createdTime: new Date().toISOString(),
              },
            ]);

            resolve();
          },
          onError: (error) => {
            createToast(FILE.ERROR.NEW_FILE + ` ${error.message}`, 'error');

            setFiles((prevFiles) => prevFiles.filter((f) => f.name !== file.name));

            resolve();
          },
        }
      );
    });
  };

  const handleUploadAllFiles = async () => {
    await Promise.all(files.map((file) => handleUploadFile(file)));
  };

  const handleDelete = (fileName: string, documentId: number) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
    onUploadFile(selectedFiles.filter((file) => file.name !== fileName));

    deleteDocumentMutation(
      {
        params: { query: { documentId: [documentId] }, path: { teamId } },
      },
      {
        onSuccess: () => createToast(FILE.SUCCESS.DELETE, 'success'),
        onError: (error) => createToast(FILE.ERROR.DELETE + ` ${error.message}`, 'error'),
      }
    );
  };

  const handleClose = () => {
    closeModal();
    queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/drive'] });
  };

  useEffect(() => {
    if (Object.keys(fileUrls).length > 0 && files.every((file) => fileUrls[file.name])) {
      handleUploadAllFiles();
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
        step={3}
        type={contentType}
        onClick={onNext ?? handleClose}
        onClose={onPrev ?? closeModal}
        onPrev={onPrev ?? closeModal}
        disabled={isDisabled}
      />
    </Modal>
  );
};

export default NewFileUploadModal;
