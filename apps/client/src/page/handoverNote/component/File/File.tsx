import { IcDeleteFile, IcFileRound } from '@tiki/icon';

import { deleteIcStyle, fileInfoStyle, fileStyle } from '@/page/handoverNote/component/File/File.style';

import { getFileVolume } from '@/shared/util/file';

interface FileProps {
  file: {
    id: number;
    fileName: string;
    fileUrl: string;
    capacity: number;
  };
}

const File = ({ file }: FileProps) => {
  const fileVolume = getFileVolume(file.capacity);

  return (
    <article css={fileStyle}>
      <IcFileRound width={32} height={32} css={{ flexShrink: 0 }} />
      <span css={fileInfoStyle}>
        <p>{file.fileName}</p>
        <p>{fileVolume}</p>
      </span>
      <IcDeleteFile width={10} height={10} css={deleteIcStyle} />
    </article>
  );
};

export default File;
