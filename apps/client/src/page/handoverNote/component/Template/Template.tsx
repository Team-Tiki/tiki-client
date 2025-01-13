import { Button, Input, Label, scrollStyle } from '@tiki/ui';

import React, { SetStateAction, useState } from 'react';

import File from '@/page/handoverNote/component/File/File';
import {
  fileBoxStyle,
  guideStyle,
  layoutStyle,
  noteWrapperStyle,
} from '@/page/handoverNote/component/Template/Template.style';
import { TEMPLATE } from '@/page/handoverNote/constants/template';
import useFile from '@/page/handoverNote/hooks/useFile';
import { TemplateNoteData } from '@/page/handoverNote/type/note';

interface TemplateProps {
  data?: TemplateNoteData;
  setData?: React.Dispatch<SetStateAction<TemplateNoteData>>;
}

const Template = ({ data, setData }: TemplateProps) => {
  const [values, setValues] = useState<Record<string, string>>({
    answerWhatActivity: data?.answerWhatActivity || '',
    answerHowToPrepare: data?.answerHowToPrepare || '',
    answerWhatIsDisappointedThing: data?.answerWhatIsDisappointedThing || '',
    answerHowToFix: data?.answerHowToFix || '',
  });

  const { files, handleFileChange } = useFile();

  const handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [id]: event.target.value,
    }));

    setData?.((prev) => ({
      ...prev!,
      [id]: event.target.value,
    }));
  };

  const handleFileUpload = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <form css={[noteWrapperStyle, scrollStyle]}>
      {TEMPLATE.map((item) => (
        <div key={item.id} css={layoutStyle}>
          <Label id={item.id}>{item.QUESTION}</Label>
          <Input id={item.id} placeholder={item.PLACEHOLDER} value={values[item.id]} onChange={handleChange(item.id)} />
        </div>
      ))}

      <div css={layoutStyle}>
        <Label id="file" css={guideStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <input id="file" type="file" style={{ display: 'none' }} multiple onChange={handleFileChange} />
        <div css={fileBoxStyle}>{data?.documentList?.map((file) => <File key={file.fileName} file={file} />)}</div>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload} type="button">
          파일 연동하기
        </Button>
      </div>
    </form>
  );
};

export default Template;
