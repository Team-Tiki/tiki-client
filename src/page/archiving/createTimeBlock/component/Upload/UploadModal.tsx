import BlockAdd from '@/page/archiving/createTimeBlock/component/Upload/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/createTimeBlock/component/Upload/File/List/BlockItem';
import { flexStyle, scrollStyle } from '@/page/archiving/createTimeBlock/component/Upload/UploadModal.style';
import { useDeleteFileMutation } from '@/page/archiving/createTimeBlock/hook/api/useDeleteFileMutation';
import { usePostTimeBlockMutation } from '@/page/archiving/createTimeBlock/hook/api/usePostTimeBlockMutation';
import { BlockData } from '@/page/archiving/createTimeBlock/type/blockType';
import { formatDatePost } from '@/page/archiving/createTimeBlock/util/date';
import { getRandomColor } from '@/page/archiving/index/util/color';

import { useEffect, useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';

interface UploadModalProps {
  onClose: () => void;
  teamId: number;
  type: string;
  blockData: BlockData;
}

const UploadModal = ({ onClose, teamId, type, blockData }: UploadModalProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<Files>({});
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [isAllUploaded, setIsAllUploaded] = useState(true);

  const { mutate: timeBlockMutate } = usePostTimeBlockMutation(teamId, type);
  const { mutate: fileDeleteMutate } = useDeleteFileMutation();

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
    name: blockData.blockName,
    color: getRandomColor(),
    startDate: formatDatePost(blockData.dates.startDate),
    endDate: formatDatePost(blockData.dates.endDate),
    blockType: blockData.blockType,
    files: fileUrls,
  };

  const handleSave = () => {
    console.log(data);
    timeBlockMutate(data, {
      onSuccess: () => {
        onClose();
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
