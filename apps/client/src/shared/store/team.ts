import { create } from 'zustand';

type TeamStore = {
  teamId: number;
  actions: {
    setTeamId: (id: number) => void;
  };
};

const useTeamStore = create<TeamStore>((set) => ({
  teamId: Number(localStorage.getItem('teamId')),

  actions: {
    setTeamId: (teamId: number) =>
      set({
        teamId,
      }),
  },
}));

export const useTeamId = () => useTeamStore((state) => state.teamId);
export const useTeamIdAction = () => useTeamStore((state) => state.actions);
