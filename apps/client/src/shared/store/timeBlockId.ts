import { create } from 'zustand';

type TimeBlockIdStore = {
  timeBlockId: number;
  actions: {
    setTimeBlockId: (id: number) => void;
  };
};

const useTimeBlockIdStore = create<TimeBlockIdStore>((set) => ({
  timeBlockId: -1,

  actions: {
    setTimeBlockId: (timeBlockId: number) =>
      set({
        timeBlockId,
      }),
  },
}));

export const useTimeBlockId = () => useTimeBlockIdStore((state) => state.timeBlockId);
export const useTimeBlockIdAction = () => useTimeBlockIdStore((state) => state.actions);
