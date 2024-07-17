import { useMutation } from '@tanstack/react-query';

import { deleteBlock } from '@/shared/api/archiving/document';
import { queryClient } from '@/shared/api/queryClient';

interface DeleteParams {
  teamId: number;
  blockId: number;
}

export const useDeleteBlockMutation = () => {
  const deleteBlockMutation = useMutation({
    mutationFn: ({ teamId, blockId }: DeleteParams) => deleteBlock(teamId, blockId),
    onSuccess: () => {
      console.log('블록 삭제 성공');
      queryClient.invalidateQueries({ queryKey: ['document', 'timeBlock'] });
    },
  });

  return deleteBlockMutation;
};
