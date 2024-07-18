import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteBlock } from '@/shared/api/archiving/document';

interface DeleteParams {
  teamId: number;
  blockId: number;
}

export const useDeleteBlockMutation = () => {
  const queryClient = useQueryClient();

  const deleteBlockMutation = useMutation({
    mutationFn: ({ teamId, blockId }: DeleteParams) => deleteBlock(teamId, blockId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timeBlock'] });
      queryClient.invalidateQueries({ queryKey: ['document'] });
    },
  });

  return deleteBlockMutation;
};
