import { useState } from 'react';

import { useClubInfoQuery } from '../api/useClubInfoQuery';

const useTeamId = () => {
  const [teamId, setTeamId] = useState(localStorage.getItem('teamId'));

  const { data } = useClubInfoQuery();

  if (teamId === null) {
    setTeamId(`${data?.belongTeamGetResponses[0].id}`);
  }

  return teamId;
};

export default useTeamId;
