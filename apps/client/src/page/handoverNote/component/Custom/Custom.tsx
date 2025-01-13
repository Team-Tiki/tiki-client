import { Button, Label, scrollStyle } from '@tiki/ui';

import File from '@/page/handover/note/component/File/File';
import {
  fileBoxStyle,
  guideStyle,
  layoutStyle,
  noteWrapperStyle,
  textareaStyle,
} from '@/page/handover/note/component/ModifyNote/Custom/Custom.style';
import { CustomNoteData } from '@/page/handover/note/component/ModifyNote/NotePage';
import useFile from '@/page/handover/note/hooks/useFile';

import { PLACEHOLDER } from '@/shared/constant/form';

interface CustomProps {
  data: CustomNoteData;
}

const Custom = ({ data }: CustomProps) => {
  const { files, handleFileChange } = useFile();

  const handleFileUpload = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <form css={[noteWrapperStyle, scrollStyle]}>
      <div css={layoutStyle}>
        <textarea css={textareaStyle} placeholder={PLACEHOLDER.CUSTOM} />
      </div>
      <div css={layoutStyle}>
        <Label id="file" css={guideStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <input id="file" type="file" style={{ display: 'none' }} multiple onChange={handleFileChange} />
        <div css={fileBoxStyle}>{data.documentList?.map((file) => <File key={file.id} file={file} />)}</div>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload}>
          파일 연동하기
        </Button>
      </div>
    </form>
  );
};

export default Custom;
