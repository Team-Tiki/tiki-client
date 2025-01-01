import { IcFileUpload } from '@tiki/icon';
import { Button, Flex, Text } from '@tiki/ui';

import { Dispatch, SetStateAction } from 'react';

import {
  boxStyle,
  buttonStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Add/BlockAdd.style';
import useFile from '@/page/archiving/index/component/TimeBlockModal/hook/common/useFile';

import { Files } from '@/shared/api/time-blocks/team/time-block/type';

interface BlockAddProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  setFileUrls: Dispatch<SetStateAction<Files>>;
  setUploadStatus: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
}

const BlockAdd = ({ files, onFilesChange, setFileUrls, setUploadStatus }: BlockAddProps) => {
  const { fileInputRef, handleFileChange, handleDragOver, handleDrop } = useFile({
    files,
    onFilesChange,
    setFileUrls,
    setUploadStatus,
  });

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
        <IcFileUpload width={32} height={32} css={{ marginBottom: '1.2rem' }} />
        <Text tag="body6">업로드할 파일을 끌어다 놓으세요.</Text>
        <Flex
          styles={{ direction: 'column', align: 'center', justify: 'center', gap: '0.8rem' }}
          css={{ margin: '1.6rem 0 2rem 0', whiteSpace: 'nowrap' }}>
          <Text tag="body8">JPEG, PNG, PDF, Word 형식의 파일을 업로드할 수 있습니다.</Text>
          <Text tag="body8">최대 파일 크기는 50MB입니다.</Text>
        </Flex>
        <Button variant="outline" css={buttonStyle} onClick={() => fileInputRef.current?.click()}>
          파일 브라우저
        </Button>
      </Flex>
    </Flex>
  );
};

export default BlockAdd;
