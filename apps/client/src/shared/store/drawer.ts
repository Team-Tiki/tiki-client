import { create } from 'zustand';

import { Block, BlockDetail } from '@/page/archiving/index/type/blockType';

export type DrawerContent = (Block & BlockDetail) | null;

interface DrawerStore {
  isOpen: boolean;
  content: DrawerContent;

  actions: {
    openDrawer: (content: DrawerContent) => void;
    closeDrawer: () => void;
    setContent: (key: keyof (Block & BlockDetail), value: Block[keyof Block] | BlockDetail[keyof BlockDetail]) => void;
  };
}

const useStore = create<DrawerStore>((set) => ({
  isOpen: false,
  content: null,

  actions: {
    openDrawer: (content: DrawerContent) =>
      set({
        isOpen: true,
        content,
      }),
    closeDrawer: () =>
      set({
        isOpen: false,
        content: null,
      }),
    setContent: (key: keyof (Block & BlockDetail), value: Block[keyof Block] | BlockDetail[keyof BlockDetail]) =>
      set((prev) => ({
        content: { ...prev.content, [key]: value } as DrawerContent,
      })),
  },
}));

export const useDrawerIsOpen = () => useStore((state) => state.isOpen);

export const useDrawerContent = () => useStore((state) => state.content);

export const useDrawerAction = () => useStore((state) => state.actions);
