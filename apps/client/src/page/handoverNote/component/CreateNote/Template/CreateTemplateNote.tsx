import { Button, Input, Label, scrollStyle } from '@tiki/ui';

import { Dispatch, SetStateAction } from 'react';

import File from '@/page/handover/note/component/File/File';
import {
  fileBoxStyle,
  guideStyle,
  layoutStyle,
  noteWrapperStyle,
} from '@/page/handover/note/component/ModifyNote/Template/Template.style';
import { TEMPLATE } from '@/page/handover/note/constants/template';
import useFile from '@/page/handover/note/hooks/useFile';
import { TemplateNote } from '@/page/handover/note/type/note';

interface TemplateNoteProps {
  setData: Dispatch<SetStateAction<TemplateNote>>;
}

const CreateTemplateNote = ({ setData }: TemplateNoteProps) => {
  const { files, handleFileChange } = useFile();

  const handleNoteContents = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [id]: event.target.value,
    }));
  };

  const handleFileUpload = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <div css={[noteWrapperStyle, scrollStyle]}>
      {TEMPLATE.map((item) => (
        <div css={layoutStyle} key={item.id}>
          <Label id={item.id}>{item.QUESTION}</Label>
          <Input id={item.id} placeholder={item.PLACEHOLDER} onChange={handleNoteContents(item.id)} />
        </div>
      ))}

      <div css={layoutStyle}>
        <Label id="file" css={guideStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <input id="file" type="file" style={{ display: 'none' }} multiple onChange={(e) => handleFileChange(e)} />
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

export default CreateTemplateNote;
