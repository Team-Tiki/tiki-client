import { ChangeEvent, useCallback, useRef, useState } from 'react';

import Button from '@/common/component/Button/Button';
import Text from '@/common/component/Text/Text';

import File from '../component/file/File';
import { fileBoxStyle, guideStyle, layoutStyle, noteWrapperStyle, textareaStyle } from './Custom.style';

const Custom = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = useCallback(() => {
    fileRef.current?.click();
  }, []);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFiles((prev) => [...prev, selectedFile]);
    }
  }, []);

  return (
    <div css={noteWrapperStyle}>
      <div css={layoutStyle}>
        <Text tag="body4" css={guideStyle}>
          다음 운영진이 참고할 인수인계 노트를 자유롭게 작성해 보세요.
        </Text>
        <textarea css={textareaStyle} placeholder="동아리의 회칙 및 대관정보 등" />
      </div>
      <div css={layoutStyle}>
        <Text tag="body4" css={guideStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Text>
        <input type="file" style={{ display: 'none' }} ref={fileRef} onChange={handleFileChange} />
        <div css={fileBoxStyle}>
          {files.map((file) => (
            <File key={file.name} file={file} />
          ))}
        </div>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload}>
          파일 연동하기
        </Button>
      </div>
    </div>
  );
};

export default Custom;
