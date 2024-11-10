import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useClubInfoQuery } from '../api/useClubInfoQuery';

const useTeamId = () => {
  const [teamId, setTeamId] = useState(localStorage.getItem('teamId'));
  const location = useLocation();

  const { data } = useClubInfoQuery();

  useEffect(() => {
    setTeamId(localStorage.getItem('teamId'));
  }, [location]); // url이 변경될 때마다 teamId 업데이트

  return teamId ?? data?.belongTeamGetResponses[0]?.id ?? '1';
};

export default useTeamId;
