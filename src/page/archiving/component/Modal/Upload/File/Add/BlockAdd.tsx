import { boxStyle, buttonStyle } from '@/page/archiving/component/Modal/Upload/File/Add/BlockAdd.style';
import useFile from '@/page/archiving/hook/useFile';

import { useEffect, useRef } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import { putUploadToS3 } from '@/shared/api/extermal';
import useGetFileData from '@/shared/hook/useGetFileData';

interface BlockAddProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  isDeleted: boolean;
}

const BlockAdd = ({ files, onFilesChange, isDeleted }: BlockAddProps) => {
  const { fileInputRef, handleFileChange, handleDragOver, handleDrop } = useFile({ files, onFilesChange });
  const { data } = useGetFileData(files);

  // 업로드된 파일을 추적하는 상태
  const uploadedFilesRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const uploadFiles = async () => {
      if (isDeleted || !data) return;

      const newUploadedFiles = new Set(uploadedFilesRef.current);

      for (let index = 0; index < data.length; index++) {
        const fileData = data[index];
        const fileName = files[index]?.name;
        const presignedUrl = fileData?.url;
        const file = files[index];

        if (file && presignedUrl && !newUploadedFiles.has(fileName)) {
          try {
            const response = await putUploadToS3(presignedUrl, file);
            console.log(`파일 (${fileName}) 업로드 성공:`, response);
            newUploadedFiles.add(fileName); // 업로드 성공 시 상태 업데이트
          } catch (uploadError) {
            console.error(`파일 (${fileName}) 업로드 실패:`, uploadError);
          }
        }
      }

      uploadedFilesRef.current = newUploadedFiles;
    };

    if (data) {
      uploadFiles();
    }
  }, [data, files, isDeleted]);

  // 파일이 변경되면 업로드 상태를 초기화
  useEffect(() => {
    const currentFiles = new Set(files.map((file) => file.name));
    const intersection = new Set([...uploadedFilesRef.current].filter((x) => currentFiles.has(x)));
    uploadedFilesRef.current = intersection;
  }, [files]);

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
          <Button variant="text" css={buttonStyle} onClick={() => fileInputRef.current?.click()}>
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
