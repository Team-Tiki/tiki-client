import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';
import { useTeamIdAction } from '@/shared/store/team';

export const useInitializeTeamId = () => {
  const { data, isSuccess } = useClubInfoQuery();
  const { setTeamId } = useTeamIdAction();

  if (isSuccess) {
    const teamId = data.belongTeamGetResponses[0].id;
    localStorage.setItem('teamId', teamId.toString());

    setTeamId(teamId);

    return teamId;
  }

  return Number(localStorage.getItem('teamId'));
};
