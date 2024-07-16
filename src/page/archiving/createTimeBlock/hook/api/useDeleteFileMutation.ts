import { useMutation } from '@tanstack/react-query';

import { deleteTimeBlock } from '@/shared/api/archiving/timeBlock';
import { DeleteFile } from '@/shared/api/archiving/timeBlock/type';

export const useDeleteFileMutation = () => {
  return useMutation({
    mutationFn: (data: DeleteFile) => deleteTimeBlock(data),
  });
};
