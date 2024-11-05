import { useClubInfoQuery } from '../api/useClubInfoQuery';

const useTeamId = () => {
  const { data } = useClubInfoQuery();

  const storedTeamId = localStorage.getItem('teamId');

  const teamId = storedTeamId ?? `${data?.belongTeamGetResponses[0].id}`;

  return teamId;
};

export default useTeamId;
