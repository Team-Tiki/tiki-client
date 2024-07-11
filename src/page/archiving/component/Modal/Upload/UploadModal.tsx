import BlockAdd from '@/page/archiving/component/Modal/Upload/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/component/Modal/Upload/File/List/BlockItem';
import { scrollStyle } from '@/page/archiving/component/Modal/Upload/UploadModal.style';

import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';

interface UploadModalProps {
  onClose: () => void;
}

const UploadModal = ({ onClose }: UploadModalProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesChange = (newFiles: File[]) => {
    setFiles(newFiles);
  };

  const handleDelete = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const handleSave = () => {
    onClose();
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
        <BlockAdd files={files} onFilesChange={handleFilesChange} />

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
