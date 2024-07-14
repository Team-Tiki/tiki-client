import { boxStyle, buttonStyle } from '@/page/archiving/component/Modal/Upload/File/Add/BlockAdd.style';
import useFile from '@/page/archiving/hook/useFile';

import { useEffect } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import useGetFileData from '@/shared/hook/useGetFileData';

interface BlockAddProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  isDeleted: boolean;
}

const BlockAdd = ({ files, onFilesChange, isDeleted }: BlockAddProps) => {
  const { fileInputRef, handleFileChange, handleDragOver, handleDrop } = useFile({
    files,
    onFilesChange,
  });

  const { data, error } = useGetFileData(files);

  useEffect(() => {
    console.log('데이터', data);
    if (!isDeleted && data) {
      data.forEach((fileData, index) => {
        const fileName = files[index]?.name;
        if (fileData) {
          console.log(`API 데이터 (${fileName}):`, fileData);
        }
      });
    }
    if (error) {
      console.error('API 오류:', error);
    }
  }, [data, error, files, isDeleted]);

  return (
    <Flex
      styles={{
        direction: 'column',
        justify: 'center',
        align: 'center',
        padding: '3.2rem 6.35rem',
        width: '100%',
      }}
      css={boxStyle}
      onDragOver={handleDragOver}
      onDrop={(event) => handleDrop(event, onFilesChange)}>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <input
          type="file"
          multiple
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={(event) => handleFileChange(event, onFilesChange)}
        />
        <Text tag="body6">업로드할 파일을 여기로 드래그 하세요</Text>
        <Flex
          styles={{ direction: 'row', align: 'center', justify: 'center', gap: '0.3rem' }}
          css={{ marginTop: '1.6rem', whiteSpace: 'nowrap' }}>
          <Text tag="body6">또는</Text>
          <Button variant="text" css={buttonStyle} onClick={() => fileInputRef.current && fileInputRef.current.click()}>
            여기를 클릭
          </Button>
          <Text tag="body6">하여</Text>
        </Flex>
        <Text tag="body6" css={{ marginTop: '0.5rem' }}>
          업로드할 파일을 선택하세요
        </Text>
      </form>
    </Flex>
  );
};

export default BlockAdd;
