import { IcDeleteFile, IcFileRound } from '@tiki/icon';

import { deleteIcStyle, fileInfoStyle, fileNameStyle, fileStyle } from '@/page/handoverNote/component/File/File.style';

import { CAUTION } from '@/shared/constant';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';
import { getFileVolume } from '@/shared/util/file';

interface FileProps {
  file: {
    id: number;
    fileName: string;
    fileUrl: string;
    capacity: number;
  };
  onDelete: (e: React.MouseEvent, id: number) => void;
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

const File = ({ file, onDelete, onClick }: FileProps) => {
  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const fileVolume = getFileVolume(file.capacity);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick?.(e);
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();

    openModal('caution', {
      infoText: CAUTION.HANDOVER_FILE_EXIST.INFO_TEXT,
      content: CAUTION.HANDOVER_FILE_EXIST.CONTENT,
      desc: CAUTION.HANDOVER_FILE_EXIST.DESC,
      onClick: () => {
        onDelete(e, file.id);

        closeModal();
      },
    });
  };

  return (
    <li>
      <button type="button" css={fileStyle} onClick={onClick} onKeyDown={handleKeyDown}>
        <IcFileRound width={32} height={32} css={{ flexShrink: 0 }} />
        <span css={fileInfoStyle}>
          <p css={fileNameStyle}>{file.fileName}</p>
          <p>{fileVolume}</p>
        </span>
        <IcDeleteFile role="button" width={10} height={10} css={deleteIcStyle} onClick={handleDelete} />
      </button>
    </li>
  );
};

export default File;
