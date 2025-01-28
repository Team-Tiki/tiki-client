import { create } from 'zustand';

type TeamStore = {
  teamId: number | null;
  actions: {
    setTeamId: (id: number | null) => void;
  };
};

const useTeamStore = create<TeamStore>((set) => ({
  teamId: Number(localStorage.getItem('teamId')),

  actions: {
    setTeamId: (teamId: number | null) =>
      set({
        teamId,
      }),
  },
}));

export const useTeamId = () => useTeamStore((state) => state.teamId);
export const useTeamIdAction = () => useTeamStore((state) => state.actions);
