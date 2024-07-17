import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/shared/api/queryClient';
import { postTimeBlock } from '@/shared/api/time-blocks/team/time-block';
import { TimeBlockCreate } from '@/shared/api/time-blocks/team/time-block/type';

export const usePostTimeBlockMutation = (teamId: number, type: string) => {
  return useMutation({
    mutationFn: (data: TimeBlockCreate) => postTimeBlock(teamId, type, data),

    /*onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['timeBlock', '2024-07'],
      });
    },*/
  });
};
