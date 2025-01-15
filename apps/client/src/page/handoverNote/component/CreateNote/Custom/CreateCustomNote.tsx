import { Button, Label, scrollStyle } from '@tiki/ui';

import { Dispatch, SetStateAction } from 'react';

import {
  fileBoxStyle,
  guideStyle,
  layoutStyle,
  noteWrapperStyle,
  textareaStyle,
} from '@/page/handoverNote/component/Custom/Custom.style';
import useFile from '@/page/handoverNote/hooks/useFile';
import { CustomNote } from '@/page/handoverNote/type/note';

import { PLACEHOLDER } from '@/shared/constant/form';

interface CustomProps {
  setData: Dispatch<SetStateAction<CustomNote>>;
}

const CreateCustomNote = ({ setData }: CustomProps) => {
  const { handleFileChange } = useFile();

  const handleFileUpload = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput?.click();
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((prev) => ({
      ...prev,
      contents: e.target.value,
    }));
  };

  return (
    <div css={[noteWrapperStyle, scrollStyle]}>
      <div css={layoutStyle}>
        <textarea css={textareaStyle} placeholder={PLACEHOLDER.CUSTOM} onChange={handleTextareaChange} />
      </div>
      <div css={layoutStyle}>
        <Label id="file" css={guideStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <input id="file" type="file" style={{ display: 'none' }} multiple onChange={(e) => handleFileChange(e)} />
        <div css={fileBoxStyle}>
          {/* {files.map((file) => (
            <File key={file.name} file={file} />
          ))} */}
        </div>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload}>
          파일 연동하기
        </Button>
      </div>
    </div>
  );
};

export default CreateCustomNote;
