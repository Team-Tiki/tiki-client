import IcDownload from '@/common/asset/svg/ic_download.svg?react';
import IcHandOver from '@/common/asset/svg/ic_handover_fill.svg?react';
import IcImage from '@/common/asset/svg/ic_image_file.svg?react';
import IcPDF from '@/common/asset/svg/ic_pdf_file.svg?react';
import IcChangeName from '@/common/asset/svg/ic_pencil.svg?react';
import IcTrash from '@/common/asset/svg/ic_trash.svg?react';
import IcWord from '@/common/asset/svg/ic_word_file.svg?react';

export const OPTION_ICON = {
  download: <IcDownload width={16} height={16} />,
  deleted: <IcTrash width={16} height={16} />,
  handover: <IcHandOver width={16} height={16} />,
  name: <IcChangeName width={16} height={16} />,
};

export const FILE_ICON = {
  pdf: <IcPDF width={40} height={40} />,
  word: <IcWord width={40} height={40} />,
  image: <IcImage width={40} height={40} />,
};
