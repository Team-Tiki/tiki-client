import { create } from 'zustand';

type TeamStore = {
  teamId: string;
  actions: {
    setTeamId: (id: string) => void;
  };
};

const useTeamStore = create<TeamStore>((set) => ({
  teamId: '0',

  actions: {
    setTeamId: (teamId: string) =>
      set({
        teamId,
      }),
  },
}));

export const useTeamId = () => useTeamStore((state) => state.teamId);

export const useTeamIdAction = () => useTeamStore((state) => state.actions);
