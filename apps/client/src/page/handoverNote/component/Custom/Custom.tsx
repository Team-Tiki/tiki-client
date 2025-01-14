import { Button, Label, scrollStyle } from '@tiki/ui';

import { SetStateAction, useState } from 'react';

import {
  fileBoxStyle,
  guideStyle,
  layoutStyle,
  noteWrapperStyle,
  textareaStyle,
} from '@/page/handoverNote/component/Custom/Custom.style';
import File from '@/page/handoverNote/component/File/File';
import useFile from '@/page/handoverNote/hooks/useFile';
import { CustomNoteData } from '@/page/handoverNote/type/note';

import { PLACEHOLDER } from '@/shared/constant/form';

interface CustomProps {
  data?: CustomNoteData;
  setData?: React.Dispatch<SetStateAction<CustomNoteData>>;
}

const Custom = ({ data, setData }: CustomProps) => {
  const [content, setContent] = useState(() => data?.contents || '');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);

    setData?.((prev) => ({
      ...prev!,
      contents: event.target.value,
    }));
  };

  const { handleFileChange } = useFile();

  const handleFileUpload = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <form css={[noteWrapperStyle, scrollStyle]}>
      <div css={layoutStyle}>
        <textarea css={textareaStyle} placeholder={PLACEHOLDER.CUSTOM} value={content} onChange={handleChange} />
      </div>
      <div css={layoutStyle}>
        <Label id="file" css={guideStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <input id="file" type="file" style={{ display: 'none' }} multiple onChange={handleFileChange} />
        <div css={fileBoxStyle}>{data?.documentList?.map((file) => <File key={file.id} file={file} />)}</div>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload}>
          파일 연동하기
        </Button>
      </div>
    </form>
  );
};

export default Custom;
