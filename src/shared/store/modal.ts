import { create } from 'zustand';

interface ModalState {
  //워크 스페이스 생성 모달
  workspaceModal: boolean;
  categoryModal: boolean;
  imageModal: boolean;
  completeModal: boolean;

  //타임블록 생성 모달
  blockModal: boolean;
  uploadModal: boolean;

  //삭제 모달
  deleteModal: boolean;

  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  workspaceModal: false,
  categoryModal: false,
  imageModal: false,
  completeModal: false,
  blockModal: false,
  uploadModal: false,
  deleteModal: false,

  openModal: (modalName) => set((state) => ({ ...state, [modalName]: true })),
  closeModal: (modalName) => set((state) => ({ ...state, [modalName]: false })),
}));
