import BlockAdd from '@/page/archiving/createTimeBlock/component/Upload/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/createTimeBlock/component/Upload/File/List/BlockItem';
import { scrollStyle } from '@/page/archiving/createTimeBlock/component/Upload/UploadModal.style';
import { formatDatePost } from '@/page/archiving/createTimeBlock/util/dateUtils';

import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { COLORS } from '@/shared/constant';
import { useDeleteFileMutation } from '@/shared/hook/useDeleteFileMutation';
import { usePostTimeBlock } from '@/shared/hook/usePostTimeBlockMutation';
import { getRandomColor } from '@/shared/util/getRandomColor';

interface UploadModalProps {
  onClose: () => void;
  teamId: number;
  type: string;
  blockData: { blockName: string; dates: { startDate: string; endDate: string } };
}

const UploadModal = ({ onClose, teamId, type, blockData }: UploadModalProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<Map<string, string>>(new Map());

  const { mutate: postTimeBlock } = usePostTimeBlock(teamId, type);
  const { mutate: deleteTimeBlock } = useDeleteFileMutation();

  const handleFilesChange = (newFiles: File[]) => {
    setFiles((prevFiles) => {
      const uniqueNewFiles = newFiles.filter((newFile) => !prevFiles.some((file) => file.name === newFile.name));
      return [...prevFiles, ...uniqueNewFiles];
    });
  };

  const handleDelete = (fileName: string) => {
    const fileToDelete = files.find((file) => file.name === fileName);
    if (fileToDelete) {
      deleteTimeBlock({ fileName: fileToDelete.name });
      setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
      setFileUrls((prevUrls) => {
        const newUrls = new Map(prevUrls);
        newUrls.delete(fileName);
        return newUrls;
      });
    }
  };

  const handleSave = () => {
    const data = {
      name: blockData.blockName,
      color: getRandomColor(COLORS),
      startDate: formatDatePost(blockData.dates.startDate),
      endDate: formatDatePost(blockData.dates.endDate),
      files: fileUrls,
    };
    console.log('데이터', data);

    postTimeBlock(data, {
      onSuccess: () => {
        console.log('post성공');
        onClose();
      },
      onError: (error) => {
        console.error('Error uploading data:', error);
      },
    });
  };

  return (
    <Flex
      tag={'section'}
      styles={{
        direction: 'column',
        justify: 'space-between',
        align: 'center',
        height: '55.11rem',
        paddingLeft: '6.8rem',
        paddingRight: '6.8rem',
        gap: '2.4rem',
      }}>
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
