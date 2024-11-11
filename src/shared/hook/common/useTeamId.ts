import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';

const useTeamId = () => {
  const [teamId, setTeamId] = useState(localStorage.getItem('teamId'));
  const location = useLocation();

  const { data } = useClubInfoQuery();

  useEffect(() => {
    setTeamId(localStorage.getItem('teamId'));
  }, [location]);

  return teamId ?? data?.belongTeamGetResponses[0]?.id ?? '0';
};

export default useTeamId;
