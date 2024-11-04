import { Dispatch, SetStateAction } from 'react';

import UploadIcon from '@/common/asset/svg/ic_upload_file.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import {
  boxStyle,
  text1Style,
  text2Style,
  text3Style,
} from '@/page/archiving/index/component/TimeBlockModal/component/Upload/File/Add/BlockAdd.style';
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
        padding: '3.2rem 0rem',
        width: '100%',
      }}
      css={boxStyle}
      onDragOver={handleDragOver}
      onDrop={(event) => handleDrop(event)}>
      <Flex tag={'form'} styles={{ direction: 'column', align: 'center', justify: 'center', width: '100%' }}>
        <input
          type="file"
          multiple
          style={{ display: 'none', width: '100%' }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <UploadIcon width={32} height={32} />
        <Text tag="body6" css={text1Style}>
          업로드할 파일을 끌어다 놓으세요.
        </Text>
        <Text tag="body8" css={text2Style}>
          JPEG, PNG, PDF, Word 형식의 파일을 업로드할 수 있습니다.
        </Text>
        <Text tag="body8" css={text3Style}>
          최대 파일 크기는 50MB입니다.
        </Text>
        <Button
          variant="outline"
          css={{ marginTop: '2rem', cursor: 'pointer', width: '16rem' }}
          onClick={() => fileInputRef.current?.click()}>
          파일 브라우저
        </Button>
      </Flex>
    </Flex>
  );
};

export default BlockAdd;
