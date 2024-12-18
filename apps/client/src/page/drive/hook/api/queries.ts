import { useSuspenseQuery } from '@tanstack/react-query';

import { getDriveData } from '@/shared/api/teams/drive';
import { useTeamId } from '@/shared/store/team';

export const useDriveData = () => {
  const teamId = useTeamId();

  return useSuspenseQuery({
    queryKey: ['drive'],
    queryFn: () => getDriveData(teamId),
  });
};
