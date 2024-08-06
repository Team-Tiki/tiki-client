import { ReactNode } from 'react';

import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  content: ReactNode;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  openModal: (content) => set({ content, isOpen: true }),
  closeModal: () => set({ content: null, isOpen: false }),
}));
