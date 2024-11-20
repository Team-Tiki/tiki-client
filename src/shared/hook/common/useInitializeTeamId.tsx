import { useTeamIdAction } from '@/shared/store/team';

import { useClubInfoQuery } from '../api/useClubInfoQuery';

export const useInitializeTeamId = () => {
  const { setTeamId } = useTeamIdAction();

  const { data, isSuccess } = useClubInfoQuery();

  if (isSuccess && !localStorage.getItem('teamId')) {
    const teamId = data.belongTeamGetResponses[0].id;
    localStorage.setItem('teamId', teamId.toString());

    setTeamId(teamId);
    return teamId;
  }

  return Number(localStorage.getItem('teamId'));
};
