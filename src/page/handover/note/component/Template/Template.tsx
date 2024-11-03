import { useCallback } from 'react';

import Button from '@/common/component/Button/Button';
import Input from '@/common/component/Input/Input';
import Label from '@/common/component/Label/Label';
import { scrollStyle } from '@/common/style/scroll';

import File from '@/page/handover/note/component/File/File';
import {
  fileBoxStyle,
  guideStyle,
  layoutStyle,
  noteWrapperStyle,
} from '@/page/handover/note/component/Template/Template.style';
import { TEMPLATE } from '@/page/handover/note/constants/template';
import useFile from '@/page/handover/note/hooks/useFile';

interface TemplateProps {
  onSubmit: () => void;
}

const Template = ({ onSubmit }: TemplateProps) => {
  const { files, handleFileChange } = useFile();

  const handleFileUpload = useCallback(() => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput?.click();
  }, []);

  return (
    <form css={[noteWrapperStyle, scrollStyle]} onSubmit={onSubmit}>
      {TEMPLATE.map((question, index) => {
        return (
          <div css={layoutStyle} key={index}>
            <Label id={question.id}>{question.QUESTION}</Label>
            <Input id={question.id} placeholder={question.PLACEHOLDER} />
          </div>
        );
      })}

      <div css={layoutStyle}>
        <Label id="file" css={guideStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <input id="file" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
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
