import { Flex, useToastAction } from '@tiki/ui';

import { useEffect, useState } from 'react';

import BlockAdd from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/List/BlockItem';
import {
  flexStyle,
  scrollContainerStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/UploadModal.style';
import { useDeleteFileMutation } from '@/page/archiving/index/component/TimeBlockModal/hook/api/useDeleteFileMutation';

import { $api } from '@/shared/api/client';
import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { Modal } from '@/shared/component/Modal';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';

const UploadModal = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<Files>({});
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [isAllUploaded, setIsAllUploaded] = useState(true);

  const teamId = useInitializeTeamId();

  const { formData, resetFormData } = useBlockContext();
  const closeModal = useCloseModal();

  const { mutate: timeblockMutation } = $api.useMutation('post', '/api/v1/teams/{teamId}/time-block', {});
  const { mutate: fileDeleteMutate } = useDeleteFileMutation();

  const { createToast } = useToastAction();

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

  // const handleDelete = (fileName: string) => {
  //   const fileToDelete = files.find((file) => file.name === fileName);
  //   if (fileToDelete) {
  //     fileDeleteMutate(
  //       { fileName: fileToDelete.name },
  //       {
  //         onSuccess: () => {
  //           setFiles((prevFiles) => {
  //             const updatedFiles = prevFiles.filter((file) => file.name !== fileName);
  //             return updatedFiles;
  //           });
  //           setFileUrls((prevUrls) => {
  //             const newUrls = { ...prevUrls };
  //             delete newUrls[fileName];
  //             return newUrls;
  //           });
  //           setUploadStatus((prevStatus) => {
  //             const newStatus = { ...prevStatus };
  //             delete newStatus[fileName];
  //             return newStatus;
  //           });
  //         },
  //       }
  //     );
  //   }
  // };

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
        blockType: formData.blockType as 'MEETING' | 'RECRUITING' | 'STUDY' | 'EVENT' | 'NOTICE' | 'ETC',
      },
    });
  };

  return (
    <>
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
                  // onDelete={() => handleDelete(file.name)}
                  /* 임의의 값 넣었음! 추후 서버 로직 다시 짤때 바꿀것!!*/
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
    </>
  );
};

export default UploadModal;
