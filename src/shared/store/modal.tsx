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

export const useModalIsOpen = () => useModalStore((state) => state.isOpen);
export const useModalContent = () => useModalStore((state) => state.content);
export const useOpenModal = () => useModalStore((state) => state.openModal);
export const useCloseModal = () => useModalStore((state) => state.closeModal);
