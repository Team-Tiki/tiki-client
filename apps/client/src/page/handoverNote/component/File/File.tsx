import { IcDeleteFile, IcFileRound } from '@tiki/icon';

import { deleteIcStyle, fileInfoStyle, fileNameStyle, fileStyle } from '@/page/handoverNote/component/File/File.style';

import { getFileVolume } from '@/shared/util/file';

interface FileProps {
  file: {
    id: number;
    fileName: string;
    fileUrl: string;
    capacity: number;
  };
  onDelete: (e: React.MouseEvent, id: number) => void;
  onClick: () => void;
}

const File = ({ file, onDelete, onClick }: FileProps) => {
  const fileVolume = getFileVolume(file.capacity);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    <li css={fileStyle} onClick={onClick} onKeyDown={handleKeyDown}>
      <IcFileRound width={32} height={32} css={{ flexShrink: 0 }} />
      <span css={fileInfoStyle}>
        <p css={fileNameStyle}>{file.fileName}</p>
        <p>{fileVolume}</p>
      </span>
      <IcDeleteFile
        role="button"
        width={10}
        height={10}
        css={deleteIcStyle}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(e, file.id);
        }}
      />
    </li>
  );
};

export default File;
