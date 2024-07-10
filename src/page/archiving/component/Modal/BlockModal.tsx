import BlockBox from '@/page/archiving/component/Modal/Box/BlockBox';
import BlockDate from '@/page/archiving/component/Modal/Date/BlockDate';
import BlockAdd from '@/page/archiving/component/Modal/File/Add/BlockAdd';
import BlockItem from '@/page/archiving/component/Modal/File/List/BlockItem';
import BlockIcon from '@/page/archiving/component/Modal/Icon/BlockIcon';

import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';

interface BlockModalProps {}

const BlockModal = ({}: BlockModalProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesChange = (newFiles: File[]) => {
    setFiles(newFiles);
  };

  const handleDelete = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <Flex
      tag={'section'}
      styles={{
        direction: 'column',
        justify: 'center',
        align: 'center',
        paddingLeft: '6.8rem',
        paddingRight: '6.8rem',
      }}>
      <Heading tag="H5" css={{ fontWeight: 600 }}>
        블록 생성하기
      </Heading>
      <Text css={{ marginTop: '1.2rem' }} tag="body4">
        타임라인에 생성할 블록 정보를 입력해주세요
      </Text>

      <BlockBox title="블록 아이콘">
        <BlockIcon />
      </BlockBox>

      <BlockBox title="블록명">
        <Input variant="default" size="large" placeholder="활동,행사명 등" css={{ width: '100%' }} />
      </BlockBox>

      <BlockBox title="기간">
        <BlockDate />
      </BlockBox>

      <BlockBox title="업로드 문서">
        <Flex styles={{ direction: 'column', align: 'center', justify: 'center', gap: '0.8rem' }}>
          {files.map((file, index) => (
            <BlockItem key={index} title={file.name} onDelete={() => handleDelete(file.name)} />
          ))}
        </Flex>
        <BlockAdd files={files} onFilesChange={handleFilesChange} />
      </BlockBox>

      <Button variant="primary" size="medium" css={{ marginTop: '1.2rem', width: '32rem' }}>
        저장
      </Button>
    </Flex>
  );
};

export default BlockModal;
