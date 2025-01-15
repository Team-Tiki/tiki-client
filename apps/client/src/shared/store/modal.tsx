import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  contentType: ModalContentType | null;
  modalData: {
    // // Deleted Modal
    title?: string;
    content?: string;
    onClick?: () => void;
    // Caution Modal
    infoText?: string;
    desc?: string;
    footerType?: 'caution' | 'caution-modify';
    onClose?: () => void;
    // File Modal
    onUpload?: () => void;
  } | null;
  actions: {
    openModal: (contentType: ModalContentType, data?: ModalState['modalData']) => void;
    closeModal: () => void;
  };
}

interface CautionModalData {
  infoText?: string;
  content?: string;
  desc?: string;
  footerType?: 'caution' | 'caution-modify';
  onClick?: () => void;
  onClose?: () => void;
}

interface FileModalData {
  onUpload: () => void;
}

type ModalData = CautionModalData | FileModalData;

type ModalContentType =
  | 'create-workspace'
  | 'create-block'
  | 'deleted'
  | 'invite'
  | 'member-tag'
  | 'activity-tag'
  | 'file'
  | 'caution';

interface CautionModalData {
  infoText?: string;
  content?: string;
  desc?: string;
  footerType?: 'caution' | 'caution-modify';
  onClick?: () => void;
  onClose?: () => void;
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

export const isCautionModalData = (data: CautionModalData | null): data is CautionModalData => {
  return !!data && ('infoText' in data || 'content' in data || 'desc' in data || 'footerType' in data);
};

export const isFileModalData = (data: ModalData | null): data is FileModalData => {
  return !!data && 'onUpload' in data;
};
