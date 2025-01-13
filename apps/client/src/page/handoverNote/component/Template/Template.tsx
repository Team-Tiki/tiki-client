import { Button, Input, Label, scrollStyle } from '@tiki/ui';

import { useState } from 'react';

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
}

const Template = ({ data }: TemplateProps) => {
  console.log(data);
  const [values, setValues] = useState<Record<string, string>>({
    answerWhatActivity: data?.data.answerWhatActivity || '',
    answerHowToPrepare: data?.data.answerHowToPrepare || '',
    answerWhatIsDisappointedThing: data?.data.answerWhatIsDisappointedThing || '',
    answerHowToFix: data?.data.answerHowToFix || '',
  });

  const { files, handleFileChange } = useFile();

  const handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [id]: event.target.value,
    }));
  };

  const handleFileUpload = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput?.click();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      ...values,
      files,
    };

    console.log(formData);

    // 서버로 데이터 전송 예시
    // mutate({ body: formData });
  };

  return (
    <form css={[noteWrapperStyle, scrollStyle]} onSubmit={handleSubmit}>
      {TEMPLATE.map((item) => (
        <div key={item.id}>
          <Label id={item.id}>{item.QUESTION}</Label>
          <Input id={item.id} placeholder={item.PLACEHOLDER} value={values[item.id]} onChange={handleChange(item.id)} />
        </div>
      ))}

      <div css={layoutStyle}>
        <Label id="file" css={guideStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <input id="file" type="file" style={{ display: 'none' }} multiple onChange={handleFileChange} />
        <div css={fileBoxStyle}>{data?.data.documentList?.map((file) => <File key={file.fileName} file={file} />)}</div>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload} type="button">
          파일 연동하기
        </Button>
      </div>

      <Button variant="primary" type="submit" css={{ marginTop: '2rem' }}>
        제출하기
      </Button>
    </form>
  );
};

export default Template;
