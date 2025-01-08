import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  contentType: string | null;
  modalData: {
    title?: string;
    content?: string;
    onClick?: () => void;
  } | null;
  actions: {
    openModal: (contentType: string, data?: ModalState['modalData']) => void;
    closeModal: () => void;
  };
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  contentType: null,
  modalData: null,
  actions: {
    openModal: (contentType, data = null) => {
      set({
        isOpen: true,
        contentType,
        modalData: data || null,
      });
    },
    closeModal: () => set({ isOpen: false, contentType: null, modalData: null }),
  },
}));

export const useModalIsOpen = () => useModalStore((state) => state.isOpen);
export const useModalContentType = () => useModalStore((state) => state.contentType);
export const useModalData = () => useModalStore((state) => state.modalData);

export const useOpenModal = () => {
  const openModal = useModalStore((state) => state.actions.openModal);
  return openModal;
};

export const useCloseModal = () => {
  const closeModal = useModalStore((state) => state.actions.closeModal);
  return closeModal;
};
