import { useQuery } from '@tanstack/react-query';

import { client } from '@/shared/api/client';
import { useTeamIdAction } from '@/shared/store/team';

export const useInitializeTeamId = () => {
  const { setTeamId } = useTeamIdAction();

  const { data, isSuccess } = useQuery({
    queryKey: ['/api/v1/teams'],
    queryFn: () => client.GET('/api/v1/teams'),
    select: (data) => data.data?.data
  });

  if (isSuccess && !localStorage.getItem('teamId')) {
    const teamId = (data?.teams && data?.teams[0]?.teamId) ?? 0;
    localStorage.setItem('teamId', teamId!.toString());

    setTeamId(teamId);

    return teamId;
  }

  return Number(localStorage.getItem('teamId'));
};
