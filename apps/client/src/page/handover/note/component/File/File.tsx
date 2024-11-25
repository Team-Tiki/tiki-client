import DeleteFileIc from '@/common/asset/svg/ic_delete_file.svg?react';
import FileIc from '@/common/asset/svg/ic_file_round.svg?react';

import { deleteIcStyle, fileInfoStyle, fileStyle } from '@/page/handover/note/component/File/File.style';

import { getFileVolume } from '@/shared/util/file';

interface FileProps {
  file: File;
}

const File = ({ file }: FileProps) => {
  const fileVolume = getFileVolume(file.size);

  return (
    <article css={fileStyle}>
      <FileIc width={32} height={32} />
      <span css={fileInfoStyle}>
        <p>{file.name}</p>
        <p>{fileVolume}</p>
      </span>
      <DeleteFileIc css={deleteIcStyle} />
    </article>
  );
};

export default File;
