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
}

const File = ({ file, onDelete = () => {} }: FileProps) => {
  const fileVolume = getFileVolume(file.capacity);

  return (
    <article css={fileStyle}>
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
    </article>
  );
};

export default File;
