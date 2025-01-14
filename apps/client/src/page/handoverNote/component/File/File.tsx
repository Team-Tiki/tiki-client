import { IcDeleteFile, IcFileRound } from '@tiki/icon';

import { deleteIcStyle, fileInfoStyle, fileStyle } from '@/page/handoverNote/component/File/File.style';

import { getFileVolume } from '@/shared/util/file';

interface FileProps {
  file: File;
}

const File = ({ file }: FileProps) => {
  const fileVolume = getFileVolume(file.size);

  return (
    <article css={fileStyle}>
      <IcFileRound width={32} height={32} css={{ flexShrink: 0 }} />
      <span css={fileInfoStyle}>
        <p>{file.name}</p>
        <p>{fileVolume}</p>
      </span>
      <IcDeleteFile width={10} height={10} css={deleteIcStyle} />
    </article>
  );
};

export default File;
