import { IcDownload, IcHandoverFill, IcImageFile, IcPdfFile, IcPencil, IcTrash, IcWordFile } from '@tiki/icon';

export const OPTION_ICON = {
  download: <IcDownload width={16} height={16} />,
  deleted: <IcTrash width={16} height={16} />,
  handover: <IcHandoverFill width={16} height={16} />,
  name: <IcPencil width={16} height={16} />,
};

export const FILE_ICON = {
  pdf: <IcPdfFile width={40} height={40} />,
  word: <IcWordFile width={40} height={40} />,
  image: <IcImageFile width={40} height={40} />,
};
