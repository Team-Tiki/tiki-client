import { ChangeEvent, useCallback, useRef, useState } from 'react';

import Button from '@/common/component/Button/Button';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';
import { scrollStyle } from '@/common/style/scroll';

import { fileBoxStyle, guideStyle, layoutStyle, noteWrapperStyle } from '@/page/handover/note/Template/Template.style';
import File from '@/page/handover/note/component/file/File';

const Template = () => {
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
    <div css={[noteWrapperStyle, scrollStyle]}>
      <div css={layoutStyle}>
        <Text tag="body4" css={guideStyle}>
          무슨 활동인가요?
        </Text>
        <Input placeholder="활동에 대해 간단하게 소개해주세요. 언제, 어디에서 진행했었는지 포함하여 작성하면 좋아요" />
      </div>

      <div css={layoutStyle}>
        <Text tag="body4" css={guideStyle}>
          운영을 위해 어떻게 준비했나요?
        </Text>
        <Input placeholder="활동을 진행하기 위해 언제부터, 어떻게 준비했는지 작성해주세요" />
      </div>

      <div css={layoutStyle}>
        <Text tag="body4" css={guideStyle}>
          아쉬웠던 점은 무엇이었나요?
        </Text>
        <Input placeholder="활동을 진행하거나 운영했던 과정에서 고치고 싶은 점이 포함되어도 좋아요" />
      </div>

      <div css={layoutStyle}>
        <Text tag="body4" css={guideStyle}>
          다음번에도 운영한다면, 어떻게 보완하면 좋을까요?
        </Text>
        <Input placeholder="보완할 방안 뿐만 아니라 새롭게 도전하면 좋은 부분도 함께 작성되면 좋아요" />
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

export default Template;
