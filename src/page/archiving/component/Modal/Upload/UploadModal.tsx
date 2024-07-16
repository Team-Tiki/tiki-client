import BlockAdd from '@/page/archiving/component/Modal/Upload/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/component/Modal/Upload/File/List/BlockItem';
import { scrollStyle } from '@/page/archiving/component/Modal/Upload/UploadModal.style';
import { formatDatePost } from '@/page/archiving/util/dateUtils';

import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import { putUploadToS3 } from '@/shared/api/extermal';
import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { COLORS } from '@/shared/constant';
import useGetFileData from '@/shared/hook/useGetFileData';
import { usePostTimeBlock } from '@/shared/hook/usePostTimeBlock';
import { getRandomColor } from '@/shared/util/getRandomColor';

interface UploadModalProps {
  onClose: () => void;
  teamId: number;
  type: string;
  blockData: { blockName: string; dates: { startDate: string; endDate: string } };
}

const UploadModal = ({ onClose, teamId, type, blockData }: UploadModalProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const mutation = usePostTimeBlock(teamId, type);

  const handleFilesChange = (newFiles: File[]) => {
    setFiles((prevFiles) => {
      const uniqueNewFiles = newFiles.filter((newFile) => !prevFiles.some((file) => file.name === newFile.name));
      return [...prevFiles, ...uniqueNewFiles];
    });
    setIsDeleted(false);
  };

  const handleDelete = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    setIsDeleted(true);
  };

  const { data: fileData, isLoading } = useGetFileData(files);
  console.log(fileData);

  const handleSave = async () => {
    const fileMap = new Map<string, string>();
    if (fileData) {
      for (let index = 0; index < fileData.length; index++) {
        const file = files[index];
        const presignedUrl = fileData[index]?.url;
        console.log(presignedUrl);
        if (file && presignedUrl) {
          const uploadedUrl = await putUploadToS3(presignedUrl, file);
          console.log(uploadedUrl);
          if (uploadedUrl) {
            fileMap.set(file.name, uploadedUrl);
            console.log(fileMap);
          }
        }
      }
    }

    const data = {
      name: blockData.blockName,
      color: getRandomColor(COLORS),
      startDate: formatDatePost(blockData.dates.startDate),
      endDate: formatDatePost(blockData.dates.endDate),
      files: fileMap,
    };
    console.log('데이터', data);

    mutation.mutate(data, {
      onSuccess: () => {
        console.log('post성공');
        onClose();
      },
      onError: (error) => {
        console.error('Error uploading data:', error);
      },
    });
  };

  console.log(isLoading);

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
        <BlockAdd files={files} onFilesChange={handleFilesChange} isDeleted={isDeleted} />
        <div className="scroll" css={scrollStyle}>
          {files.map((file, index) => (
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
