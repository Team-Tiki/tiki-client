import BlockAdd from '@/page/archiving/component/Modal/Upload/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/component/Modal/Upload/File/List/BlockItem';

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
        height: '52.72rem',
        paddingLeft: '6.8rem',
        paddingRight: '6.8rem',
        gap: '2.4rem',
      }}>
      <WorkSapceInfo step="upload" title="블록 생성하기" info="해당 블록에 업로드할 문서를 선택해주세요" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexGrow: 1,
          width: '37.5rem',
          gap: '2.4rem',
        }}>
        <BlockAdd files={files} onFilesChange={handleFilesChange} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: '18rem',
            width: '37.5rem',
            overflow: 'hidden',
            position: 'relative',
            alignSelf: 'flex-start',
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              maxHeight: '18rem',
              overflowY: 'scroll',
              width: '100%',
              boxSizing: 'content-box',
              position: 'relative',
            }}>
            {files.map((file, index) => (
              <BlockItem key={index} title={file.name} onDelete={() => handleDelete(file.name)} />
            ))}
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '1rem',
              backgroundColor: 'transparent',
            }}
          />
        </div>
      </div>
      <Button variant="primary" size="medium" css={{ width: '32rem' }} onClick={handleSave}>
        저장
      </Button>
    </Flex>
  );
};

export default UploadModal;
