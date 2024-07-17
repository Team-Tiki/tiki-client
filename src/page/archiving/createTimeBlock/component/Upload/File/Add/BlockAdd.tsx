import { boxStyle, buttonStyle } from '@/page/archiving/createTimeBlock/component/Upload/File/Add/BlockAdd.style';
import useFile from '@/page/archiving/createTimeBlock/hook/common/useFile';

import { Dispatch, SetStateAction } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import { Files } from '@/shared/api/time-blocks/team/time-block/type';

interface BlockAddProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  setFileUrls: Dispatch<SetStateAction<Files>>;
}

const BlockAdd = ({ files, onFilesChange, setFileUrls }: BlockAddProps) => {
  const { fileInputRef, handleFileChange, handleDragOver, handleDrop } = useFile({ files, onFilesChange, setFileUrls });

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
      onDrop={(event) => handleDrop(event)}>
      <Flex tag={'form'} styles={{ direction: 'column', align: 'center', justify: 'center' }}>
        <input type="file" multiple style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
        <Text tag="body6">업로드할 파일을 여기로 드래그 하세요</Text>
        <Flex
          styles={{ direction: 'row', align: 'center', justify: 'center', gap: '0.3rem' }}
          css={{ marginTop: '1.6rem', whiteSpace: 'nowrap' }}>
          <Text tag="body6">또는</Text>
          <Button variant="text" css={buttonStyle} onClick={() => fileInputRef.current?.click()}>
            여기를 클릭
          </Button>
          <Text tag="body6">하여</Text>
        </Flex>
        <Text tag="body6" css={{ marginTop: '0.5rem' }}>
          업로드할 파일을 선택하세요
        </Text>
      </Flex>
    </Flex>
  );
};

export default BlockAdd;
