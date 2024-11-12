import { ReactNode, createContext, useContext } from 'react';

import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';

interface TeamProviderProp {
  children?: ReactNode;
}

const TeamContext = createContext(Number(localStorage.getItem('teamId')));

export const useTeamContext = () => {
  const context = useContext(TeamContext);

  if (context === undefined) {
    throw new Error('useTeamContext must be used within a TeamProvider');
  }

  return context;
};

const TeamProvider = ({ children }: TeamProviderProp) => {
  const { data } = useClubInfoQuery();
  const teamId = Number(localStorage.getItem('teamId')) || data?.belongTeamGetResponses?.[0]?.id;

  if (!teamId) {
    console.error('teamId undefined');
    return;
  }

  return <TeamContext.Provider value={teamId}>{children}</TeamContext.Provider>;
};

export default TeamProvider;
