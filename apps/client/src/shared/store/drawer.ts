import { create } from 'zustand';

import { File } from '@/shared/type/file';

export type DrawerContent = {
  title: string;
  startDate: Date;
  endDate: Date;
  blockType: string;
  color: string;
  taggedMembers: [];
  handoverNotes: [];
  files: File[];
} | null;

interface DrawerStore {
  isOpen: boolean;
  content: DrawerContent;

  actions: {
    openDrawer: (content: DrawerContent) => void;
    closeDrawer: () => void;
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
  },
}));

export const useDrawerIsOpen = () => useStore((state) => state.isOpen);

export const useDrawerContent = () => useStore((state) => state.content);

export const useDrawerAction = () => useStore((state) => state.actions);
