import { boxStyle, buttonStyle } from '@/page/archiving/component/Modal/Upload/File/Add/BlockAdd.style';

import { useRef } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

interface BlockAddProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
}

const BlockAdd = ({ files, onFilesChange }: BlockAddProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const fileArray = Array.from(newFiles);
    onFilesChange([...files, ...fileArray]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    handleFiles(event.dataTransfer.files);
  };

  return (
    <Flex
      styles={{
        direction: 'column',
        justify: 'center',
        align: 'center',
        padding: '3.2rem 6.35rem',
        width: '37.5rem',
      }}
      css={boxStyle}
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      <input type="file" multiple style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
      <Text tag="body6">업로드할 파일을 여기로 드래그 하세요</Text>
      <Flex
        styles={{ direction: 'row', align: 'center', justify: 'center', gap: '0.3rem' }}
        css={{ marginTop: '1.6rem' }}>
        <Text tag="body6">또는</Text>
        <button type="button" css={buttonStyle} onClick={() => fileInputRef.current && fileInputRef.current.click()}>
          여기를 클릭
        </button>
        <Text tag="body6">하여</Text>
      </Flex>
      <Text tag="body6" css={{ marginTop: '0.5rem' }}>
        업로드할 파일을 선택하세요
      </Text>
    </Flex>
  );
};

export default BlockAdd;