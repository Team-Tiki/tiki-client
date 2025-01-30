import { create } from 'zustand';

import { STORAGE_KEY } from '@/shared/constant/api';

type TeamStore = {
  teamId: number | null;
  actions: {
    setTeamId: (id: number | null) => void;
  };
};

const useTeamStore = create<TeamStore>((set) => ({
  teamId: Number(localStorage.getItem(STORAGE_KEY.TEAM_ID)),

  actions: {
    setTeamId: (teamId: number | null) =>
      set({
        teamId,
      }),
  },
}));

export const useTeamId = () => useTeamStore((state) => state.teamId);
export const useTeamIdAction = () => useTeamStore((state) => state.actions);
