import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';
import { useTeamIdAction } from '@/shared/store/team';

export const useInitializeTeamId = () => {
  const { data } = useClubInfoQuery();
  const { setTeamId } = useTeamIdAction();

  if (data && !localStorage.getItem('teamId')) {
    localStorage.setItem('teamId', data.belongTeamGetResponses[0].id.toString());
    setTeamId(data.belongTeamGetResponses[0].id);

    return data.belongTeamGetResponses[0].id;
  }

  return Number(localStorage.getItem('teamId'));
};
