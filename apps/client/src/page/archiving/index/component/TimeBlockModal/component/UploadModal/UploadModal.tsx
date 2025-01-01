import { Flex } from '@tiki/ui';

import { useEffect, useState } from 'react';

import BlockAdd from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/List/BlockItem';
import {
  flexStyle,
  scrollContainerStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/UploadModal.style';

import { $api } from '@/shared/api/client';
import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { Modal } from '@/shared/component/Modal';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';

// Modal 컴포넌트 내에서 size prop 전달
const UploadModal = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<Files>({});
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [isAllUploaded, setIsAllUploaded] = useState(true);

  const teamId = useInitializeTeamId();

  const { formData, resetFormData } = useBlockContext();
  const closeModal = useCloseModal();

  const { mutate: timeblockMutation } = $api.useMutation('post', '/api/v1/teams/{teamId}/time-block', {});

  useEffect(() => {
    const allUploaded =
      files.length === 0 || (files.length > 0 && Object.values(uploadStatus).every((status) => status));
    setIsAllUploaded(allUploaded);
  }, [uploadStatus, files.length]);

  const handleFilesChange = (newFiles: File[]) => {
    setFiles((prevFiles) => {
      const uniqueNewFiles = newFiles.filter(
        (newFile) => !prevFiles.some((file) => file.name === newFile.name && file.size === newFile.size)
      );
      return [...prevFiles, ...uniqueNewFiles];
    });
    setIsAllUploaded(false);
  };

  const data = {
    name: formData.name,
    color: formData.color,
    startDate: formData.startDate,
    endDate: formData.endDate,
    blockType: formData.blockType,
    files: fileUrls,
    documentIds: formData.documentIds,
  };

  const handleSave = () => {
    timeblockMutation({
      params: {
        query: {
          type: 'executive',
        },
        path: {
          teamId,
        },
      },
      body: {
        ...data,
      },
    });
  };

  return (
    <Modal isOpen={true} size="large" onClose={closeModal}>
      <Modal.Header step={2} />
      <Modal.Body>
        <Flex css={flexStyle}>
          <Flex
            styles={{
              direction: 'column',
              align: 'flex-start',
              grow: '1',
              width: '100%',
              gap: '2.4rem',
            }}>
            <BlockAdd
              files={files}
              onFilesChange={handleFilesChange}
              setFileUrls={setFileUrls}
              setUploadStatus={setUploadStatus}
            />
            <div css={scrollContainerStyle}>
              {files.map((file) => (
                <BlockItem
                  key={`${file.name}-${file.lastModified}`}
                  title={file.name}
                  fileSize="2.4MB"
                  uploadedSize="0.2MB"
                  isUploading={!uploadStatus[file.name]}
                />
              ))}
            </div>
          </Flex>
        </Flex>
      </Modal.Body>
      <Modal.Footer step={3} contentType="create-block" buttonClick={handleSave} />
    </Modal>
  );
};

export default UploadModal;
