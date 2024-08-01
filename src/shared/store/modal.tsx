import { ReactNode } from 'react';

import { create } from 'zustand';

import { ModalType } from '@/shared/type/block';

interface ModalState {
  id: ModalType | null;
  isOpen: boolean;
  content: ReactNode;
  openModal: (id: ModalType, content: ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  id: null,
  isOpen: false,
  content: null,
  openModal: (id, content) => set({ id, content, isOpen: true }),
  closeModal: () => set({ id: null, content: null, isOpen: false }),
}));
