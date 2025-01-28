import { IcDocPdf, IcDocWord, IcImage } from '@tiki/icon';

import { File } from '@/shared/type/file';

export const selectFileIc = (fileType: File | string) => {
  if (['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif'].includes(fileType)) {
    return <IcImage width={16} height={16} />;
  }

  if (['pdf'].includes(fileType)) {
    return <IcDocPdf width={16} height={16} />;
  }

  if (['doc', 'docx'].includes(fileType)) {
    return <IcDocWord width={16} height={16} />;
  }

  return <IcDocPdf width={16} height={16} />;
};
