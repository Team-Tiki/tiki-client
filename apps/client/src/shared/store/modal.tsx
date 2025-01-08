import { create } from 'zustand';

interface CautionModalData {
  infoText?: string;
  content?: string;
  desc?: string;
  footerType?: 'caution' | 'caution-modify';
  onClick?: () => void;
  onClose?: () => void;
}

interface ModalState {
  isOpen: boolean;
  contentType: string | null;
  modalData: CautionModalData | null;
  actions: {
    openModal: (contentType: string, data?: CautionModalData | null) => void;
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
