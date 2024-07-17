import { useMutation } from '@tanstack/react-query';

import { deleteTimeBlock } from '@/shared/api/file';
import { DeleteFile } from '@/shared/api/file/type';

export const useDeleteFileMutation = () => {
  return useMutation({
    mutationFn: (data: DeleteFile) => deleteTimeBlock(data),
  });
};
