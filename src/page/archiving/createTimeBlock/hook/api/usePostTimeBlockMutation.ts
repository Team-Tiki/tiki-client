import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { postTimeBlock } from '@/shared/api/time-blocks/team/time-block';
import { TimeBlockCreate } from '@/shared/api/time-blocks/team/time-block/type';

export const usePostTimeBlockMutation = (teamId: number, type: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TimeBlockCreate) => postTimeBlock(teamId, type, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['timeBlock'],
      });
    },
  });
};
