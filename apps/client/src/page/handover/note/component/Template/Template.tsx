import { Button, Input, Label, scrollStyle } from '@tiki/ui';

import File from '@/page/handover/note/component/File/File';
import {
  fileBoxStyle,
  guideStyle,
  layoutStyle,
  noteWrapperStyle,
} from '@/page/handover/note/component/Template/Template.style';
import { TEMPLATE } from '@/page/handover/note/constants/template';
import useFile from '@/page/handover/note/hooks/useFile';

const Template = () => {
  // const handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues((prev) => ({
  //     ...prev,
  //     [id]: event.target.value,
  //   }));
  // };

  const { files, handleFileChange } = useFile();

  const handleFileUpload = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput?.click();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log('Submitted values:', values);

    // mutate({ body: values });
  };

  return (
    <form css={[noteWrapperStyle, scrollStyle]} onSubmit={handleSubmit}>
      {TEMPLATE.map((item) => (
        <div css={layoutStyle} key={item.id}>
          <Label id={item.id}>{item.QUESTION}</Label>
          <Input
            id={item.id}
            placeholder={item.PLACEHOLDER}
            // value={values[item.id as keyof typeof values]}
            // onChange={handleChange(item.id)}
          />
        </div>
      ))}

      <div css={layoutStyle}>
        <Label id="file" css={guideStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <input id="file" type="file" style={{ display: 'none' }} multiple onChange={handleFileChange} />
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
