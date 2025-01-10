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
  }
}

interface CautionModalData {
  infoText?: string;
  content?: string;
  desc?: string;
  footerType?: 'caution' | 'caution-modify';
  onClick?: () => void;
  onClose?: () => void;
}

type ModalContentType =
  | 'create-workspace'
  | 'create-block'
  | 'deleted'
  | 'invite'
  | 'member-tag'
  | 'activity-tag'
  | 'caution';

interface ModalState {
  isOpen: boolean;
  contentType: ModalContentType | null;
  modalData: ModalData | null;
  actions: {
    openModal: (contentType: ModalContentType, data?: CautionModalData | null) => void;
    closeModal: () => void;
  };
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  contentType: null,
  modalData: null,
  actions: {
    openModal: (contentType, data = null) => {
      set({ isOpen: true, contentType, modalData: data });
    },
    closeModal: () => set({ isOpen: false, contentType: null, modalData: null }),
  },
}));

export const useModalIsOpen = () => useModalStore((state) => state.isOpen);
export const useModalContentType = () => useModalStore((state) => state.contentType);
export const useModalData = () => useModalStore((state) => state.modalData);
export const useOpenModal = () => useModalStore((state) => state.actions.openModal);
export const useCloseModal = () => useModalStore((state) => state.actions.closeModal);

export const isCautionModalData = (data: ModalData | null): data is CautionModalData => {
  return !!data && ('infoText' in data || 'content' in data || 'desc' in data || 'footerType' in data);
};

