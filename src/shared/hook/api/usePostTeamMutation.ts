import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postTeam } from '@/shared/api/teams';
import { CreateTeam } from '@/shared/api/teams/type';

export const usePostTeamMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTeam) => postTeam(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['clubInfo'],
      });
    },
  });
};
