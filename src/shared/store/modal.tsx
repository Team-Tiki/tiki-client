import { ReactNode } from 'react';

import { create } from 'zustand';

import { ModalType } from '@/shared/type/block';

interface ModalState {
  id: ModalType | null;
  isOpen: boolean;
  content: ReactNode;
  closeCallback: (() => void) | null;
  openModal: (id: ModalType, content: ReactNode, closeCallback?: (() => void) | null) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  id: null,
  isOpen: false,
  content: null,
  closeCallback: null,
  openModal: (id, content, closeCallback = null) => set({ id, content, isOpen: true, closeCallback }),
  closeModal: () => {
    set((state) => {
      if (state.closeCallback) {
        state.closeCallback();
      }
      return { id: null, content: null, isOpen: false, closeCallback: null };
    });
  },
}));
