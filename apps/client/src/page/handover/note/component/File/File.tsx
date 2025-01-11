import { IcDeleteFile, IcFileRound } from '@tiki/icon';

import { deleteIcStyle, fileInfoStyle, fileStyle } from '@/page/handover/note/component/File/File.style';
import { Document } from '@/page/handover/note/component/ModifyNote/NotePage';

import { getFileVolume } from '@/shared/util/file';

interface FileProps {
  file: Document;
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
