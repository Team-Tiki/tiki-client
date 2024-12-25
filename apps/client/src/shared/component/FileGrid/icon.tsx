import { IcDownload, IcHandoverFill, IcImageFile, IcPdfFile, IcPencil, IcTrash, IcWordFile } from '@tiki/icon';

import { File } from '@/shared/type/file';

export const OPTION_ICON = {
  download: <IcDownload width={16} height={16} />,
  deleted: <IcTrash width={16} height={16} />,
  handover: <IcHandoverFill width={16} height={16} />,
  name: <IcPencil width={16} height={16} />,
};

export const FILE_ICON = {
  pdf: <IcPdfFile width={40} height={40} />,
  doc: <IcWordFile width={40} height={40} />,
  image: <IcImageFile width={40} height={40} />,
};

export const getIconByType = (type: File) => {
  switch (type) {
    case 'pdf':
      return FILE_ICON['pdf'];
    case 'doc':
      return FILE_ICON['doc'];
    case 'docx':
      return FILE_ICON['doc'];
    case 'png':
      return FILE_ICON['image'];
    case 'jpg':
      return FILE_ICON['image'];
    case 'jpeg':
      return FILE_ICON['image'];
    case 'webp':
      return FILE_ICON['image'];
    case 'avif':
      return FILE_ICON['image'];
    case 'gif':
      return FILE_ICON['image'];
    default: {
      return FILE_ICON['image'];
    }
  }
};
