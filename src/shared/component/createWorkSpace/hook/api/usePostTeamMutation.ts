import { useMutation } from '@tanstack/react-query';

import { postTeam } from '@/shared/api/teams';
import { CreateTeam } from '@/shared/api/teams/type';

export const usePostTeamMutation = () => {
  return useMutation({
    mutationFn: (data: CreateTeam) => postTeam(data),
  });
};
