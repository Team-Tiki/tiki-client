import BlockAdd from '@/page/archiving/createTimeBlock/component/Upload/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/createTimeBlock/component/Upload/File/List/BlockItem';
import { flexStyle, scrollStyle } from '@/page/archiving/createTimeBlock/component/Upload/UploadModal.style';
import { useDeleteFileMutation } from '@/page/archiving/createTimeBlock/hook/api/useDeleteFileMutation';
import { usePostTimeBlockMutation } from '@/page/archiving/createTimeBlock/hook/api/usePostTimeBlockMutation';
import { BlockData } from '@/page/archiving/createTimeBlock/type/blockType';
import { formatDatePost } from '@/page/archiving/createTimeBlock/util/date';
import { getRandomColor } from '@/page/archiving/index/util/color';

import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { useToastStore } from '@/shared/store/toast';

interface UploadModalProps {
  onClose: () => void;
  teamId: number;
  type: string;
  blockData: BlockData;
}

const UploadModal = ({ onClose, teamId, type, blockData }: UploadModalProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<Files>({});

  const { mutate: timeBlockMutate } = usePostTimeBlockMutation(teamId, type);
  const { mutate: fileDeleteMutate } = useDeleteFileMutation();
  const { createToast } = useToastStore();

  const handleFilesChange = (newFiles: File[]) => {
    setFiles((prevFiles) => {
      const uniqueNewFiles = newFiles.filter((newFile) => !prevFiles.some((file) => file.name === newFile.name));
      return [...prevFiles, ...uniqueNewFiles];
    });
  };

  const handleDelete = (fileName: string) => {
    const fileToDelete = files.find((file) => file.name === fileName);
    if (fileToDelete) {
      fileDeleteMutate({ fileName: fileToDelete.name });
      setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
      setFileUrls((prevUrls) => {
        const newUrls = { ...prevUrls };
        delete newUrls[fileName];
        return newUrls;
      });
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
    timeBlockMutate(data, {
      onSuccess: () => {
        onClose();
        createToast('활동 블록이 생성되었습니다', 'success');
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
        <BlockAdd files={files} onFilesChange={handleFilesChange} setFileUrls={setFileUrls} />
        <div className="scroll" css={scrollStyle}>
          {files.map((file) => (
            <BlockItem key={file.lastModified} title={file.name} onDelete={() => handleDelete(file.name)} />
          ))}
        </div>
      </Flex>
      <Button variant="primary" size="medium" css={{ width: '32rem' }} onClick={handleSave}>
        저장
      </Button>
    </Flex>
  );
};

export default UploadModal;
