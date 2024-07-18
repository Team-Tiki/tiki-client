import { create } from 'zustand';

type TeamStore = {
  teamId: string;
  setTeamId: (id: string) => void;
};

export const useTeamStore = create<TeamStore>((set) => ({
  teamId: '0',

  setTeamId: (id: string) =>
    set({
      teamId: id,
    }),
}));
