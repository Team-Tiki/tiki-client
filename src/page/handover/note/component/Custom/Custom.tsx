import Button from '@/common/component/Button/Button';
import Label from '@/common/component/Label/Label';
import { scrollStyle } from '@/common/style/scroll';

import {
  fileBoxStyle,
  guideStyle,
  layoutStyle,
  noteWrapperStyle,
  textareaStyle,
} from '@/page/handover/note/component/Custom/Custom.style';
import File from '@/page/handover/note/component/File/File';
import useFile from '@/page/handover/note/hooks/useFile';

interface CustomProps {
  onSubmit: () => void;
}

const Custom = ({ onSubmit }: CustomProps) => {
  const { files, handleFileChange } = useFile();

  const handleFileUpload = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <form css={[noteWrapperStyle, scrollStyle]} onSubmit={onSubmit}>
      <div css={layoutStyle}>
        <textarea
          css={textareaStyle}
          placeholder="다음 운영진이 참고할 인수인계 노트를 자유롭게 작성해 보세요 (ex. 동아리의 회칙 및 대관정보 등)"
        />
      </div>
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

export default Custom;
