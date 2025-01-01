import { Button, Flex, useToastAction } from '@tiki/ui';

import { useEffect, useState } from 'react';

import BlockAdd from '@/page/archiving/index/component/TimeBlockModal/component/Upload/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/index/component/TimeBlockModal/component/Upload/File/List/BlockItem';
import {
  flexStyle,
  scrollStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/Upload/UploadModal.style';
import { useDeleteFileMutation } from '@/page/archiving/index/component/TimeBlockModal/hook/api/useDeleteFileMutation';
import { usePostTimeBlockMutation } from '@/page/archiving/index/component/TimeBlockModal/hook/api/usePostTimeBlockMutation';
import { getRandomColor } from '@/page/archiving/index/component/TimeBlockModal/util/color';
import { formatDatePost } from '@/page/archiving/index/component/TimeBlockModal/util/date';

import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import WorkSapceInfo from '@/shared/component/WorkSpaceModal/info/WorkSpaceInfo';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';

const UploadModal = () => {
  const teamId = useInitializeTeamId();

  const { formData, resetFormData } = useBlockContext();

  const closeModal = useCloseModal();

  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<Files>({});
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [isAllUploaded, setIsAllUploaded] = useState(true);

  const { mutate: timeBlockMutate } = usePostTimeBlockMutation(teamId, 'executive');
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

  const data = {
    name: formData.blockName,
    color: getRandomColor(),
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
        resetFormData();
      },
    });
  };

  return (
    <Flex tag={'section'} css={flexStyle}>
      <WorkSapceInfo step="upload" title="블록 생성하기" info="해당 블록에 업로드할 문서를 선택해주세요" />
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
              isUploading={!uploadStatus[file.name]}
            />
          ))}
        </div>
      </Flex>
      <Button variant="primary" size="medium" css={{ width: '32rem' }} onClick={handleSave} disabled={!isAllUploaded}>
        저장
      </Button>
    </Flex>
  );
};

export default UploadModal;
