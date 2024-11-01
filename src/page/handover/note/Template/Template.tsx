import { ChangeEvent, useCallback, useRef, useState } from 'react';

import Button from '@/common/component/Button/Button';
import Input from '@/common/component/Input/Input';
import Label from '@/common/component/Label/Label';
import { scrollStyle } from '@/common/style/scroll';

import { fileBoxStyle, guideStyle, layoutStyle, noteWrapperStyle } from '@/page/handover/note/Template/Template.style';
import File from '@/page/handover/note/component/file/File';

import { TEMPLATE } from '../constants/template';

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
    <form css={[noteWrapperStyle, scrollStyle]}>
      {TEMPLATE.map((question) => {
        return (
          <div css={layoutStyle}>
            <Label id={question.id}>{question.QUESTION}</Label>
            <Input id={question.id} placeholder={question.PLACEHOLDER} />
          </div>
        );
      })}

      <div css={layoutStyle}>
        <Label id="5" css={guideStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <input id="5" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
        <div css={fileBoxStyle}>
          {files.map((file) => (
            <File key={file.name} file={file} />
          ))}
        </div>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload}>
          파일 연동하기
        </Button>
      </div>
    </form>
  );
};

export default Template;
