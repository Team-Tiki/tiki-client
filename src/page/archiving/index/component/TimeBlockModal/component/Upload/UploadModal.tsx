import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Flex from '@/common/component/Flex/Flex';
import { Modal } from '@/common/component/Modal';

import BlockAdd from '@/page/archiving/index/component/TimeBlockModal/component/Upload/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/index/component/TimeBlockModal/component/Upload/File/List/BlockItem';
import {
  flexStyle,
  scrollStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/Upload/UploadModal.style';
import { useDeleteFileMutation } from '@/page/archiving/index/component/TimeBlockModal/hook/api/useDeleteFileMutation';
import { usePostTimeBlockMutation } from '@/page/archiving/index/component/TimeBlockModal/hook/api/usePostTimeBlockMutation';
import { formatDatePost } from '@/page/archiving/index/component/TimeBlockModal/util/date';

import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useCloseModal } from '@/shared/store/modal';
import { useToastAction } from '@/shared/store/toast';

interface UploadModalProps {
  isVisible: boolean;
}

const UploadModal = ({ isVisible }: UploadModalProps) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const teamId = searchParams.get('teamId');
  const { formData, reset } = useBlockContext();
  const closeModal = useCloseModal();

  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<Files>({});
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [isAllUploaded, setIsAllUploaded] = useState(true);

  const { mutate: timeBlockMutate } = usePostTimeBlockMutation(+teamId!, 'executive');
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

  const handleDelete = (fileName: string) => {
    const fileToDelete = files.find((file) => file.name === fileName);
    if (fileToDelete) {
      fileDeleteMutate(
        { fileName: fileToDelete.name },
        {
          onSuccess: () => {
            setFiles((prevFiles) => {
              const updatedFiles = prevFiles.filter((file) => file.name !== fileName);
              return updatedFiles;
            });
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
          },
        }
      );
    }
  };

  if (!isVisible) return null;

  const data = {
    name: formData.blockName,
    color: formData.blockColor,
    startDate: formatDatePost(formData.startDate),
    endDate: formatDatePost(formData.endDate),
    blockType: formData.blockType,
    files: fileUrls,
  };

  const handleSave = () => {
    timeBlockMutate(data, {
      onSuccess: () => {
        createToast('활동 블록이 생성되었습니다', 'success');
        closeModal();
        reset();
      },
    });
  };

  return (
    <>
      <Modal.Header step={2} />
      <Modal.Body>
        <Flex tag={'section'} css={flexStyle}>
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
            <div className="scroll" css={scrollStyle}>
              {files.map((file) => (
                <BlockItem
                  key={file.name}
                  title={file.name}
                  onDelete={() => handleDelete(file.name)}
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
      <Modal.Footer step={2} buttonClick={handleSave} />
    </>
  );
};

export default UploadModal;
