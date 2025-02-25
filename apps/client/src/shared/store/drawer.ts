import { create } from 'zustand';

import { Block, BlockDetail } from '@/page/archiving/index/type/blockType';

export type DrawerContent = (Block & BlockDetail) | null;

interface DrawerStore {
  isOpen: boolean;
  content: DrawerContent;
  initialContent: DrawerContent;

  actions: {
    openDrawer: (content: DrawerContent) => void;
    closeDrawer: () => void;
    setContent: (key: keyof (Block & BlockDetail), value: Block[keyof Block] | BlockDetail[keyof BlockDetail]) => void;
    setInitialContent: (content: DrawerContent) => void;
  };
}

const useStore = create<DrawerStore>((set) => ({
  isOpen: false,
  content: null,
  initialContent: null,

  actions: {
    openDrawer: (content: DrawerContent) =>
      set({
        isOpen: true,
        content,
        initialContent: content,
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
    setInitialContent: (content) =>
      set({
        initialContent: content,
      }),
  },
}));

export const useDrawerIsOpen = () => useStore((state) => state.isOpen);

export const useDrawerContent = () => useStore((state) => state.content);

export const useDrawerInitialContent = () => useStore((state) => state.initialContent);

export const useDrawerAction = () => useStore((state) => state.actions);

export const useDrawerIsChanged = () =>
  useStore((state) => {
    if (state.content === null && state.initialContent === null) return false;

    return JSON.stringify(state.content) !== JSON.stringify(state.initialContent);
  });
